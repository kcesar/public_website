import { ReactNode } from "react";
import Contour from "@/components/topo/contour";

export default function BasicLayout({
  children,
  contour = true,
}: {
  children: ReactNode;
  contour?: boolean;
}) {
  return (
    <div className="relative flex flex-col items-center pb-10">
      {/* Subtle topographic backdrop for interior pages — in the body, not on
          the banner photo. Masked so it eases in below the banner. Off on the
          home page, which already renders the full terrain field. */}
      {contour && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0, transparent 14rem, black 46rem)",
            maskImage:
              "linear-gradient(to bottom, transparent 0, transparent 14rem, black 46rem)",
          }}
        >
          <Contour opacity={0.1} className="!absolute inset-0 h-full" />
        </div>
      )}
      <div className="relative flex w-full flex-col items-center">
        {children}
      </div>
    </div>
  );
}
