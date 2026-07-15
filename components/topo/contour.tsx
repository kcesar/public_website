/*
  Topographic contour field — the site's signature motif.

  Land navigation is a core SAR skill (the site even teaches UTM/pacing on the
  mapwork page), so contour lines are authentic to the subject rather than
  decoration. One irregular closed path is rendered at descending scales around
  two elevation centers to read like nested contour rings on a topo map.

  Purely ambient: aria-hidden, non-interactive, and static (no animation) so it
  never competes with content or hurts performance.
*/

// A single wobbly closed loop (~radius 120 around the origin).
const RING =
  "M120 0C118 -42 88 -72 48 -96C8 -120 -42 -108 -82 -78C-122 -48 -126 2 -104 46C-82 90 -34 118 22 112C78 106 122 68 120 0Z";

const SCALES = [1, 0.8, 0.61, 0.43, 0.27, 0.14];

function Peak({ x, y, rotate }: { x: number; y: number; rotate: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
      {SCALES.map((s) => (
        <path key={s} d={RING} transform={`scale(${s})`} vectorEffect="non-scaling-stroke" />
      ))}
    </g>
  );
}

export default function Contour({
  className = "",
  opacity = 0.5,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 800 400"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none absolute inset-0 h-full w-full text-moss ${className}`}
      style={{ opacity }}
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
    >
      <Peak x={585} y={150} rotate={-8} />
      <Peak x={205} y={300} rotate={18} />
    </svg>
  );
}
