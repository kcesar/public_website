import { MOUNTAIN_FILL, DISTANT, MTN } from "./terrain-data";

/*
  Steep, rugged ridgeline that caps the top of the content section: the page
  "rises" over the hero video as a solid fractured mountain silhouette, with a
  faint distant ridge behind and a divider line at its base separating it from
  the topographic section below. See components/topo/terrain-data.ts.

  Fill uses currentColor: set text-<base color> so the silhouette merges with
  the section beneath it.
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
      {/* distant ridge behind the crest (in the "sky" over the video) */}
      <path d={DISTANT} fill="none" stroke="#2e5e43" strokeWidth={1.5} opacity={0.4} />
      {/* solid near-ridge silhouette — fill matches the section via currentColor */}
      <path d={MOUNTAIN_FILL} fill="currentColor" />
    </svg>
  );
}
