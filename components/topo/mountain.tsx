import { MOUNTAIN_FILL } from "./terrain-data";

/*
  Steep, rugged ridgeline that caps the top of the content section: the page
  "rises" over the hero video as a solid fractured mountain silhouette. The
  topographic section fades in below it. See components/topo/terrain-data.ts.

  Fill uses currentColor: set text-<base color> so the silhouette merges with
  the section beneath it. VIEW_H crops the viewBox above the fill's true bottom
  (260) to trim excess solid base below the crest.
*/
const VIEW_H = 190;

export default function MountainRidge({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox={`0 0 1440 ${VIEW_H}`}
      preserveAspectRatio="none"
      className={`block w-full ${className}`}
    >
      {/* solid near-ridge silhouette — fill matches the section via currentColor */}
      <path d={MOUNTAIN_FILL} fill="currentColor" />
    </svg>
  );
}
