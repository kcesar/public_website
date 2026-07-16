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
const VIEW_H = 150;

// How far to lift the distant range so it peeks higher above the near ridge.
const RAISE = 45;
// Close the distant ridge into a filled silhouette. Extend the base past the
// viewBox so that, once translated up by RAISE, it still fills to the bottom.
const DISTANT_FILL = `${DISTANT}L1440 ${VIEW_H + RAISE}L0 ${VIEW_H + RAISE}Z`;

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
      {/* distant range, a step lighter — lifted so it peeks above the near ridge */}
      <path d={DISTANT_FILL} fill="#1d3d2b" transform={`translate(0 -${RAISE})`} />
      {/* solid near ridge — fill matches the section via currentColor */}
      <path d={MOUNTAIN_FILL} fill="currentColor" />
    </svg>
  );
}
