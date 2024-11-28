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
    <div className="card card-compact w-56 md:w-72 bg-base-100 shadow-xl">
      <figure>
        <Image
          src={location}
          alt={alt}
          height={500}
          width={500}
          className="object-cover max-h-[300px]"
        />
      </figure>
      <div className="card-body text-white bg-esar-green rounded-b-xl">
        <h2 className="card-title"> {personName}</h2>

        <div className="card-actions justify-end">
          <p>{title}</p>
          <Link href={`mailto:${email}`}>
            <FaEnvelope className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </div>
  );
}
