import Image from "next/image";

export default function BasicImage({
  location,
  alt,
}: {
  location: string;
  alt: string;
}) {
  return (
    <div className="relative h-96 w-full max-w-4xl mx-auto">
      <Image
        alt={alt}
        src={location}
        fill={true}
        sizes="(min-width: 928px) 896px, 100vw"
        className="brightness-90 object-cover overflow-hidden rounded-xl"
      />
    </div>
  );
}
