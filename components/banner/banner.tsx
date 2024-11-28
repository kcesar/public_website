import Image from "next/image";

export default function Banner({
  title,
  location,
  alt,
}: {
  title: string;
  location: string;
  alt: string;
}) {
  return (
    // <div className="object-cover overflow-clip relative min-w-full h-96 z-0 -mt-20">
    //   <Image alt={alt} src={location} fill={true} />
    // </div>
    <div className="relative w-full pb-10">
      <div className="relative z-0 h-96 -mt-20">
        <Image
          alt={alt}
          src={location}
          fill={true}
          priority={true}
          className="object-cover overflow-hidden brightness-[0.6]"
        />
      </div>
      <div className="absolute z-10 -mt-52 w-full">
        <h1 className="text-5xl md:text-7xl font-bold text-white text-center tracking-widest">
          {title}
        </h1>
      </div>
    </div>
  );
}
