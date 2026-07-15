import Image from "next/image";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";

export default function Card({
  personName,
  title,
  email,
  location,
  alt,
}: {
  personName: string;
  title: string;
  email: string;
  location: string;
  alt: string;
}) {
  return (
    <div className="card card-compact w-56 md:w-72 bg-canopy border border-moss/40 shadow-xl overflow-hidden">
      <figure>
        <Image
          src={location}
          alt={alt}
          height={500}
          width={500}
          className="object-cover max-h-[300px] w-full brightness-90"
        />
      </figure>
      <div className="card-body">
        <h2 className="font-gin text-xl tracking-wider text-bone">
          {personName}
        </h2>
        <div className="flex items-center justify-between">
          <p className="eyebrow !text-lichen">{title}</p>
          <Link
            href={`mailto:${email}`}
            aria-label={`Email ${personName}`}
            className="text-trail hover:text-bone transition-colors"
          >
            <FaEnvelope className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
