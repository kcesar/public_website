# KCESAR Public Website

Informational/marketing site for King County Explorer Search & Rescue (ESAR).
Next.js 16 (App Router) + React 19 + TypeScript, styled with Tailwind CSS v4 and
daisyUI v5. Statically rendered; deployed as a Node standalone app to Azure App
Service. Shareable previews come from the Fly.io app (`fly.toml` +
`Dockerfile`); Vercel's automatic Git deployments are switched off — see
`vercel.json`.

---

# Design system — "Deep Forest / Field Ops"

The visual identity is a deliberate, subject-specific point of view: a deep
evergreen palette (dark as a *choice*, derived from the brand green — not a
neutral near-black default), a rugged/technical type system, and a
**topographic** signature grounded in the fact that land navigation is a core
SAR skill. When building or changing UI, stay inside this system rather than
introducing new fonts, colors, or one-off card styles.

## Core principles

- **Match the system, not just "make it look nice."** New sections reuse the
  existing type roles, palette tokens, cards, and dividers below.
- **Trust the headings; don't over-label.** Do NOT put a small "eyebrow" kicker
  above every heading — that repetition reads as templated. Use an eyebrow only
  when it carries real information (a stat, a date, an emergency label) or names
  an otherwise-unlabeled element. Most sections are just a `gin` heading.
- **The topographic motif is the one bold move.** Keep it subtle and let it be
  the memorable element; keep everything else quiet.
- **Quality floor:** responsive to mobile, visible keyboard focus, honor
  `prefers-reduced-motion` (the hero video already does), decorative SVGs are
  `aria-hidden`.

## Color

The daisyUI theme `esar` is defined in `app/globals.css` via
`@plugin "daisyui/theme"` (default, `data-theme="esar"` on `<html>`; dark
color-scheme, not toggled). Named brand colors are also exposed as Tailwind
utilities in the `@theme` block (`bg-timber`, `text-trail`, `border-moss`, …).

| Token | Hex | Role | daisyUI mapping |
|-------|-----|------|-----------------|
| Timber | `#0b1f16` | page base (the `<html>` canvas bg) | `base-100` |
| Canopy | `#10271b` | raised surfaces / cards | `base-200` |
| (elevated) | `#1b3a29` | hover / elevated | `base-300` |
| ESAR Green | `#026737` | brand anchor, primary buttons, footer | `primary` |
| Trail | `#34c56e` | links & interactive (replaces default blue) | `secondary` |
| Beacon | `#f26a21` | **reserved** for the single highest-intent action (Donate) | `accent` |
| Bone | `#f3f6f1` | primary text | `base-content` |
| Lichen | `#9db1a4` | muted / secondary text | — |
| Moss | `#2e5e43` | hairlines, borders, topo lines | — |

Rules: links/interactive use **Trail**; **Beacon** appears only on donate CTAs;
default-blue links are not allowed (swept to Trail). Buttons put dark text on
Beacon for contrast.

## Typography — 3 roles, all from the loaded Typekit (`use.typekit.net/xyo6wwn`)

| Role | Face | Tailwind | Usage |
|------|------|----------|-------|
| Display | `gin` (condensed, squared) | `font-gin` | page titles, section headings, stat numerals — uppercase, `tracking-wider` |
| Body | `trade-gothic-next` | `font-trade-gothic-next` | paragraphs, UI; set as the `<body>` default in `globals.css` |
| Label | `stratum-2-web` | `font-stratum` | small uppercase "map annotation" labels: eyebrows, nav, buttons, table headers, roles |

Do not reach for other faces (Mulish, komet, etc.) — the old Mulish body font
was removed. Shared text components: `Subtitle` (gin heading), `SubSubtitle`
(body-face supporting subheading — intentionally *not* gin).

## Topographic signature system

Real iso-elevation contour lines (marching-squares) + a fractal mountain ridge,
drawn from **generated** data — never hand-edit the generated files; edit the
generator and re-run.

| Component | Source data | Where used |
|-----------|-------------|-----------|
| `components/topo/contour.tsx` (`Contour`) | self-contained (baked paths) | the ambient contour backdrop everywhere: interior page bodies (via `BasicLayout`), the home section background, the home stats panel |
| `components/topo/mountain.tsx` (`MountainRidge`) | `components/topo/terrain-data.ts` (`MOUNTAIN_FILL`, `DISTANT`) | home hero→content transition (the solid ridge silhouette, over the video) |

Generators (Bun/Node, deterministic — safe to re-run, output is stable):

```
bun run gen:contours   # tools/topo/gen-contours.mjs → components/topo/contour.tsx
bun run gen:terrain    # tools/topo/gen-terrain.mjs  → components/topo/terrain-data.ts
bun run gen:topo       # both
```

`Contour` is a zoomed-out field (many small hills) and uses
`preserveAspectRatio="xMidYMid slice"` so it never distorts — important on
mobile, where a non-aspect-preserving field would squish. It's rendered faintly
and masked to fade in below the banner/mountain. `MountainRidge` is a solid
silhouette (no contours on it); it uses `terrain-data.ts` only for the ridge
shape and is `preserveAspectRatio="none"` since a ridge should span the full
width. Home is the full signature (mountain + contour backdrop); interior pages
get just the faint `Contour` backdrop; banner photos carry NO contours.

## CSS utilities & gotchas (in `app/globals.css`)

- `eyebrow` — the stratum "map annotation" label (uppercase, tracked, Trail).
  Use sparingly (see principles).
- `ridgeline` — the dashed contour divider that replaces daisyUI `divider`
  between sections.
- Unlayered `.btn:not(.btn-circle):not(.btn-square) { border-radius: .375rem }`
  — slightly-rounded buttons matching the navbar; the `:not(...)` guard keeps
  the circular logo/hamburger round. (See also the daisyUI radius note below.)
- `html { overflow-x: hidden }` is a backstop; horizontal overflow is also
  fixed at the source (video uses `w-full` not `w-screen`; `.drawer-side`
  `inset-inline: 0` overrides daisyUI's `inset: 0 -8px 0 8px`). Keep all three.

## Page & layout architecture

Interior pages follow one pattern (see `README.md` "Adding New Pages"):

```
<BasicLayout>            {/* relative wrapper + faint topo Contour backdrop, pb-10 */}
  <Banner … />          {/* full-bleed photo + timber gradient + gin title + optional eyebrow */}
  <BasicBody>           {/* container max-width + horizontal padding */}
    <Subtitle … /> + CenteredText / cards / <div className="ridgeline my-14" />
  </BasicBody>
</BasicLayout>
```

- `BasicLayout` renders the subtle interior-body `Contour` by default; pass
  `contour={false}` where a page provides its own terrain (the home page does).
- Cards across the site share one look: `bg-canopy border border-moss/40`, a
  `font-gin` title, `eyebrow`/`lichen` labels, `text-trail` links. Reuse this
  rather than inventing new card styles.
- Global chrome: `Navbar` (transparent → `bg-timber/85` on scroll), `Footer`
  (canopy, ESAR-green top rule, nav columns + Beacon donate CTA).

---

## Package manager & runtime: Bun (NOT npm)

This project uses **Bun**. Do **not** assume npm / yarn / pnpm are installed.
The committed lockfile is `bun.lockb`.

| Task | Command |
|------|---------|
| Install deps | `bun install` (CI: `bun install --frozen-lockfile`) |
| Dev server | `bun run dev` |
| Production build | `bun run build` |
| Lint | `bun run lint` |
| Type check | `bun run typecheck` |
| Unit tests | `bun run test` (Bun's built-in runner; specs in `tests/unit/`) |
| E2E tests | `bun run test:e2e` (Playwright + Chromium; specs in `e2e/`) |

Use `bun` / `bun run <script>` for all local work, scripts, and GitHub Actions.
When adding a workflow or doc, target Bun (e.g. `oven-sh/setup-bun`), not
`actions/setup-node` + `npm install`.

> **Exception — do NOT change:** `.github/workflows/deploy-prod.yml` (the Azure
> production deploy) uses `npm install` on Node 20. That pipeline is owned/managed
> outside this repo's normal workflow — leave it exactly as-is; do not "migrate"
> it to Bun. Everything else — local dev and the `pr-checks` workflow — uses Bun.

## Testing

- **Unit:** Bun's built-in runner. Specs live in `tests/unit/`. Run with
  `bun run test` (scoped to `tests/unit` — do **not** run bare `bun test`, which
  would also try to execute the Playwright `e2e/*.spec.ts` files and fail).
- **E2E:** Playwright (Chromium only). Specs in `e2e/`, config in
  `playwright.config.ts`. Run with `bun run test:e2e`; it auto-starts the dev
  server via `webServer`. First run needs `bunx playwright install chromium`.
- Both run in CI via `.github/workflows/pr-checks.yml` (unit in the `checks`
  job, E2E in a dedicated `e2e` job).

## Config gotchas (don't relearn these)

- **`next.config.js` `distDir`** is `process.env.VERCEL ? '.next' : 'build'`.
  Vercel's Next.js builder only finds `routes-manifest.json` in the default
  `.next`; the Azure deploy zips from `build/standalone` + `build/static`. Keep
  it conditional — don't hardcode either value. (Automatic Vercel deployments
  are currently off via `vercel.json`, but the branch stays so a manual
  `vercel deploy` still works.)
- **`output: 'standalone'`** exists for the Azure self-hosted deploy. Vercel
  ignores it; leave it.
- **daisyUI v5 button radius:** under turbopack dev the base `.btn` corner
  radius can be dropped, so `app/globals.css` reasserts it with an *unlayered*
  `.btn:not(.btn-circle):not(.btn-square) { border-radius: .375rem }` rule
  (unlayered so it wins over daisyUI's layered token; the `:not(...)` keeps the
  circular logo/hamburger round). Don't remove it.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
