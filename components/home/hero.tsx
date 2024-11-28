import Image from "next/image";
import BasicLink from "../navigation/basiclink";

export default function Hero() {
  return (
    <div className="h-[calc(100vh-80px)] flex text-center items-center justify-center text-white -translate-y-[60px]">
      <div className="max-w-6xl pb-10 px-5">
        <div className="relative w-[150px] h-[150px] md:w-[200px] md:h-[200px] mt-10 md:mt-24 mb-10 inline-block">
          <Image
            alt="Tailwind CSS Navbar component"
            src="/kcesar/logos/logo_kcesar_1280x1280.png"
            fill={true}
            priority={true}
            className="drop-shadow-xl"
          />
        </div>
        <h1 className="text-3xl md:text-7xl font-gin font-normal drop-shadow-xl md:[text-shadow:_0_5px_10px_rgb(0_0_0_/_60%)] tracking-wider pb-5 md:pb-10">
          <span className="block">King County Explorer</span>
          <span className="block">Search & Rescue</span>
        </h1>
        <h1 className="text-lg md:text-3xl font-gin drop-shadow-xl md:[text-shadow:_0_2px_10px_rgb(0_0_0_/_60%)] tracking-widest pb-5">
          Est. 1954 - King County, Washington
        </h1>
        <p className="text-sm md:text-lg pb-10 drop-shadow-xl md:[text-shadow:_0_1px_4px_rgb(0_0_0_/_60%)]">
          King County Explorer Search & Rescue is one of the earliest Search &
          Rescue organizations established in the United States and the largest
          of nine member-units of the King County Search & Rescue Association.
        </p>
        <BasicLink title="Join Us" href="/join-us" />
      </div>
    </div>
  );
}
