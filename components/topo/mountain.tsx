import { MOUNTAIN_FILL, DISTANT } from "./terrain-data";

/*
  Steep, rugged ridgeline that caps the top of the content section: the page
  "rises" over the hero video as two layered fractured silhouettes — a lighter
  distant range behind, and the solid near ridge in front (the section color).
  The topographic section fades in below it. See components/topo/terrain-data.ts.

  The near ridge fills with currentColor: set text-<base color> so it merges with
  the section beneath it. VIEW_H crops the viewBox above the fill's true bottom
  (260) to trim excess solid base below the crest.
*/
const VIEW_H = 190;

// Close the distant ridge line into a filled silhouette down to the viewBox base.
const DISTANT_FILL = `${DISTANT}L1440 ${VIEW_H}L0 ${VIEW_H}Z`;

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
      {/* distant range, a step lighter — peeks above the near ridge for depth */}
      <path d={DISTANT_FILL} fill="#1d3d2b" />
      {/* solid near ridge — fill matches the section via currentColor */}
      <path d={MOUNTAIN_FILL} fill="currentColor" />
    </svg>
  );
}
