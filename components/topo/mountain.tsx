import { FIELD, MOUNTAIN_FILL, DISTANT, MTN } from "./terrain-data";

/*
  Steep, rugged ridgeline that caps the top of the content section. The page
  "rises" over the hero video as a fractured mountain silhouette, and the SAME
  topographic field used by the section background (TerrainField) is drawn on
  the mountain face — clipped to the silhouette — so the contours are literally
  continuous across the seam. See components/topo/terrain-data.ts.

  Fill uses currentColor: set text-<base color> so the silhouette merges with
  the section beneath it. preserveAspectRatio="none" + full width keep the
  horizontal scale identical to TerrainField so lines join at the boundary.
*/
export default function MountainRidge({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox={`0 0 1440 ${MTN}`}
      preserveAspectRatio="none"
      className={`block w-full ${className}`}
    >
      <defs>
        <clipPath id="mtn-ridge-clip">
          <path d={MOUNTAIN_FILL} />
        </clipPath>
      </defs>
      {/* distant ridge behind the crest (in the "sky" over the video) */}
      <path d={DISTANT} fill="none" stroke="#2e5e43" strokeWidth={1.5} opacity={0.4} />
      {/* solid near-ridge silhouette — fill matches the section via currentColor */}
      <path d={MOUNTAIN_FILL} fill="currentColor" />
      {/* the shared contour field, clipped to the mountain body */}
      <g clipPath="url(#mtn-ridge-clip)" fill="none" stroke="#2e5e43">
        {FIELD.map((c, i) => (
          <path key={i} d={c.d} strokeWidth={c.i ? 1.6 : 0.9} strokeOpacity={c.i ? 0.8 : 0.45} />
        ))}
      </g>
      {/* divider at the base of the ridge, separating it from the section.
          Drawn last so it sits on top; non-scaling stroke keeps it crisp. */}
      <line
        x1="0"
        y1={MTN - 1}
        x2="1440"
        y2={MTN - 1}
        stroke="#aebfb4"
        strokeWidth={2}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
