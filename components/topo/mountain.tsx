/*
  Mountain ridgeline that caps the top of the content section, so the page
  "rises" over the hero video as a peaked silhouette instead of a flat edge.

  The silhouette is filled with `currentColor` — set text-<base color> on the
  element so it merges seamlessly with the section beneath it. A couple of
  faint contour strokes follow the slope to tie into the topographic system.
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
      viewBox="0 0 1440 200"
      preserveAspectRatio="none"
      className={`block w-full ${className}`}
    >
      {/* Faint contour lines echoing the ridge, drawn behind the fill edge */}
      <g fill="none" stroke="#2e5e43" strokeWidth="1.5" opacity="0.5">
        <path d="M0,150 L300,70 L470,150 L720,40 L900,150 L1160,80 L1440,150" />
        <path d="M0,178 L300,104 L470,178 L720,80 L900,178 L1160,116 L1440,178" opacity="0.6" />
      </g>
      {/* The solid range silhouette — fill matches the section via currentColor */}
      <path
        fill="currentColor"
        d="M0,200 L0,150 L300,70 L470,150 L720,40 L900,150 L1160,80 L1440,150 L1440,200 Z"
      />
    </svg>
  );
}
