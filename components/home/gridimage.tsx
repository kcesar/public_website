import Image from "next/image";

export default function GridImage({
  location,
  alt,
}: {
  location: string;
  alt: string;
}) {
  return (
    <div className="col-span-2 content-center">
      <div className="relative h-[24rem]">
        <Image
          alt={alt}
          src={location}
          sizes="100vw"
          fill={true}
          className="brightness-90 object-cover overflow-hidden rounded-xl"
        />
      </div>
    </div>
  );
}
