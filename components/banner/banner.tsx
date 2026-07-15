import Image from "next/image";
import Contour from "@/components/topo/contour";

export default function Banner({
  title,
  location,
  alt,
  eyebrow,
}: {
  title: string;
  location: string;
  alt: string;
  eyebrow?: string;
}) {
  return (
    <div className="relative w-full pb-10">
      <div className="relative z-0 h-96 -mt-20 overflow-hidden bg-timber">
        <Image
          alt={alt}
          src={location}
          fill={true}
          priority={true}
          sizes="100vw"
          className="object-cover brightness-[0.5]"
        />
        {/* Topographic texture + a gradient that grounds the title in Timber */}
        <Contour opacity={0.35} />
        <div className="absolute inset-0 bg-gradient-to-b from-timber/40 via-transparent to-timber" />
      </div>
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center -mt-20 px-4">
        <p className="eyebrow !text-sm text-trail pb-3">
          {eyebrow ?? "King County Explorer Search & Rescue"}
        </p>
        <h1 className="font-gin text-5xl md:text-7xl text-bone text-center tracking-wider drop-shadow-[0_4px_10px_rgb(0_0_0/60%)]">
          {title}
        </h1>
      </div>
    </div>
  );
}
