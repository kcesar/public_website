import { FIELD, FIELD_H, MTN } from "./terrain-data";

/*
  The section-background half of the shared terrain. Renders the same FIELD as
  MountainRidge but the portion BELOW the mountain band (translated up by MTN),
  so the contour lines flow continuously out of the mountain and down the page.

  preserveAspectRatio="none" + full width match MountainRidge's horizontal
  scale, so every contour that crosses the seam (field y = MTN) lands at the
  same x in both and the lines join. Ambient and non-interactive.
*/
export default function TerrainField({
  className = "",
  opacity = 0.55,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox={`0 0 1440 ${FIELD_H - MTN}`}
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-0 h-full w-full text-moss ${className}`}
      style={{ opacity }}
      fill="none"
      stroke="currentColor"
    >
      <g transform={`translate(0 -${MTN})`}>
        {FIELD.map((c, i) => (
          <path key={i} d={c.d} strokeWidth={c.i ? 1.6 : 0.9} strokeOpacity={c.i ? 0.8 : 0.45} />
        ))}
      </g>
    </svg>
  );
}
