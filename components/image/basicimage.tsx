import Image from "next/image";

export default function BasicImage({
  location,
  alt,
}: {
  location: string;
  alt: string;
}) {
  return (
    <div className="relative h-96 w-full px-2 lg:px-5">
      <Image
        alt={alt}
        src={location}
        fill={true}
        className="brightness-90 object-cover overflow-hidden rounded-xl"
      />
    </div>
  );
}
