import { FIELD, FIELD_H, MTN } from "./terrain-data";

/*
  The section-background topographic field. Renders the FIELD portion below the
  mountain band (translated up by MTN). A top-down mask fades the contours out
  as they approach the mountain, so the ridge meets the section cleanly with no
  seam line and no visible slope kink. Ambient and non-interactive.
*/
export default function TerrainField({
  className = "",
  opacity = 0.55,
  fade = "220px",
}: {
  className?: string;
  opacity?: number;
  fade?: string;
}) {
  const mask = `linear-gradient(to bottom, transparent 0, black ${fade})`;
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox={`0 0 1440 ${FIELD_H - MTN}`}
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-0 h-full w-full text-moss ${className}`}
      style={{ opacity, maskImage: mask, WebkitMaskImage: mask }}
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
