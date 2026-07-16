// Generates components/topo/terrain-data.ts — ONE topographic terrain shared by
// the home-page mountain cap (MountainRidge) and the section background
// (TerrainField), so the contour lines are continuous across the seam.
//
// Coordinate space: x 0..FIELD_W (full width), y 0..FIELD_H (top of mountain →
// down the page). MountainRidge renders y 0..MTN and TerrainField renders
// y MTN..FIELD_H, both with preserveAspectRatio="none" and the same horizontal
// scale — so every contour crossing the seam (y = MTN) lands at the same x in
// both and the lines join.
//
// Deterministic (seeded RNG). Run: `bun run gen:terrain`. Do not hand-edit the
// generated file.

import { writeFileSync } from "fs";

const W = 1440;
const FIELD_H = 1300;
const MTN = 260; // mountain band height in field units

function mulberry32(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ---- Rugged mountain silhouette (fractal midpoint displacement) ---- */
function ridge(seed, iters, baseY, amp, rough, tilt = 0) {
  const rnd = mulberry32(seed);
  let pts = [
    { x: 0, y: baseY + (rnd() - 0.5) * amp },
    { x: 1, y: baseY + tilt + (rnd() - 0.5) * amp },
  ];
  let disp = amp;
  for (let it = 0; it < iters; it++) {
    const next = [];
    for (let i = 0; i < pts.length - 1; i++) {
      const a = pts[i], b = pts[i + 1];
      next.push(a);
      next.push({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 + (rnd() - 0.5) * disp });
    }
    next.push(pts[pts.length - 1]);
    pts = next;
    disp *= rough;
  }
  return pts.map((p) => ({ x: Math.round(p.x * W), y: Math.max(10, Math.min(MTN - 6, Math.round(p.y))) }));
}
const line = (pts) => "M" + pts.map((p) => `${p.x} ${p.y}`).join("L");
// Slope both ridges down toward the left/right corners so their silhouettes ease
// into the base at the edges instead of ending on a tall vertical wall. A wide
// EDGE keeps the drop-off gradual; both ranges use the same shoulder so they
// recede in parallel. The floors differ because MountainRidge lifts the distant
// range (RAISE=92) but not the near one — a shared floor would sink the front
// below the viewBox and clip it to a flat line. FLOOR_FRONT is chosen so the
// near ridge lands just below where the raised distant corner renders, keeping a
// thin sliver of the lighter range visible at the very edges.
const EDGE = 220, FLOOR_DISTANT = 185, FLOOR_FRONT = 112;
function taperEnds(pts, edge, floorY) {
  return pts.map((p) => {
    const t = Math.min(p.x, W - p.x) / edge; // 0 at the very edge → 1 inward
    if (t >= 1) return p;
    const k = t * t * (3 - 2 * t); // smoothstep for a natural shoulder
    return { x: p.x, y: Math.round(p.y * k + floorY * (1 - k)) };
  });
}
const front = taperEnds(ridge(4231, 7, 150, 165, 0.62, 6), EDGE, FLOOR_FRONT);
const mountainFill = line(front) + `L${W} ${MTN}L0 ${MTN}Z`;
const distant = line(taperEnds(ridge(9187, 8, 108, 135, 0.62, -12), EDGE, FLOOR_DISTANT));

/* ---- Elevation field + marching squares over the whole terrain ---- */
const COLS = 110, ROWS = 105;
const dx = W / COLS, dy = FIELD_H / ROWS;
function gauss(x, y, cx, cy, amp, sx, sy) {
  const a = (x - cx) / sx, b = (y - cy) / sy;
  return amp * Math.exp(-(a * a + b * b));
}
function elevation(x, y) {
  let h = 0;
  h += gauss(x, y, 470, 120, 1.0, 320, 150);   // ridge crest zone (top)
  h += gauss(x, y, 300, 470, 0.9, 300, 240);   // upper hill
  h += gauss(x, y, 1080, 620, 0.85, 340, 300); // right massif
  h += gauss(x, y, 250, 980, 0.7, 300, 260);   // lower-left knoll
  h += gauss(x, y, 900, 1120, 0.6, 320, 240);  // lower hill
  h -= gauss(x, y, 720, 780, 0.5, 260, 220);   // basin
  h += 0.00018 * x - 0.00012 * y;               // gentle regional tilt
  return h;
}
const grid = [];
let min = Infinity, max = -Infinity;
for (let r = 0; r <= ROWS; r++) {
  const row = [];
  for (let c = 0; c <= COLS; c++) {
    const v = elevation(c * dx, r * dy);
    row.push(v); if (v < min) min = v; if (v > max) max = v;
  }
  grid.push(row);
}
const LEVELS = 19;
const levels = [];
for (let i = 1; i < LEVELS; i++) levels.push(min + ((max - min) * i) / LEVELS);
const lerp = (p1, p2, v1, v2, l) => {
  const t = (l - v1) / (v2 - v1);
  return [p1[0] + (p2[0] - p1[0]) * t, p1[1] + (p2[1] - p1[1]) * t];
};
const byLevel = levels.map(() => []);
for (let r = 0; r < ROWS; r++) {
  for (let c = 0; c < COLS; c++) {
    const x0 = c * dx, y0 = r * dy, x1 = (c + 1) * dx, y1 = (r + 1) * dy;
    const tl = grid[r][c], tr = grid[r][c + 1], br = grid[r + 1][c + 1], bl = grid[r + 1][c];
    for (let li = 0; li < levels.length; li++) {
      const lv = levels[li];
      let idx = 0;
      if (tl > lv) idx |= 8; if (tr > lv) idx |= 4; if (br > lv) idx |= 2; if (bl > lv) idx |= 1;
      if (idx === 0 || idx === 15) continue;
      const top = () => lerp([x0, y0], [x1, y0], tl, tr, lv);
      const right = () => lerp([x1, y0], [x1, y1], tr, br, lv);
      const bottom = () => lerp([x0, y1], [x1, y1], bl, br, lv);
      const left = () => lerp([x0, y0], [x0, y1], tl, bl, lv);
      const seg = [];
      switch (idx) {
        case 1: case 14: seg.push(left(), bottom()); break;
        case 2: case 13: seg.push(bottom(), right()); break;
        case 3: case 12: seg.push(left(), right()); break;
        case 4: case 11: seg.push(top(), right()); break;
        case 5: seg.push(left(), top()); seg.push(bottom(), right()); break;
        case 6: case 9: seg.push(top(), bottom()); break;
        case 7: case 8: seg.push(left(), top()); break;
        case 10: seg.push(left(), bottom()); seg.push(top(), right()); break;
      }
      for (let s = 0; s < seg.length; s += 2) byLevel[li].push([seg[s], seg[s + 1]]);
    }
  }
}
function stitch(segs) {
  const key = (p) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`;
  const used = new Array(segs.length).fill(false);
  const map = new Map();
  segs.forEach((s, i) => s.forEach((p) => { const k = key(p); if (!map.has(k)) map.set(k, []); map.get(k).push(i); }));
  const out = [];
  for (let i = 0; i < segs.length; i++) {
    if (used[i]) continue; used[i] = true;
    const ln = [segs[i][0], segs[i][1]];
    let grow = true;
    while (grow) {
      grow = false;
      const end = ln[ln.length - 1];
      for (const j of map.get(key(end)) || []) {
        if (used[j]) continue;
        const [a, b] = segs[j];
        if (key(a) === key(end)) { ln.push(b); used[j] = true; grow = true; break; }
        if (key(b) === key(end)) { ln.push(a); used[j] = true; grow = true; break; }
      }
    }
    if (ln.length >= 2) out.push(ln);
  }
  return out;
}
const toPath = (ln) => "M" + ln.map((p) => `${Math.round(p[0])} ${Math.round(p[1])}`).join("L");
const field = [];
for (let li = 0; li < byLevel.length; li++) {
  const lines = stitch(byLevel[li]).filter((l) => l.length >= 4);
  if (!lines.length) continue;
  field.push({ i: li % 4 === 0 ? 1 : 0, d: lines.map(toPath).join("") });
}

const dataTs = `// AUTO-GENERATED by tools/topo/gen-terrain.mjs — do not hand-edit.
// One terrain shared by the mountain cap and the section background so the
// contour lines are continuous across the seam. Coord space: ${W} x ${FIELD_H},
// mountain band = top ${MTN} units.
export const FIELD_W = ${W};
export const FIELD_H = ${FIELD_H};
export const MTN = ${MTN};
export const MOUNTAIN_FILL = ${JSON.stringify(mountainFill)};
export const DISTANT = ${JSON.stringify(distant)};
export const FIELD: { i: number; d: string }[] = ${JSON.stringify(field)};
`;
writeFileSync(new URL("../../components/topo/terrain-data.ts", import.meta.url), dataTs);
console.log("terrain-data.ts:", field.length, "levels,", dataTs.length, "chars");
