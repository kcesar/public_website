import Image from "next/image";

export default function SmallImage({
  location,
  alt,
}: {
  location: string;
  alt: string;
}) {
  return (
    <div className="flex justify-center py-5">
      <div className="relative w-5/6 h-[16rem]">
        <Image
          alt={alt}
          src={location}
          fill={true}
          className="object-cover overflow-hidden rounded-xl"
        />
      </div>
    </div>
  );
}
