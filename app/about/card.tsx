import Link from "next/link";
import { FaEnvelope, FaUser } from "react-icons/fa";

export default function Card({
  personName,
  title,
  email,
}: {
  personName: string;
  title: string;
  email: string;
  // Still accepted (and passed by the About page) so real headshots can be
  // restored later; unused while we show the placeholder below.
  location: string;
  alt: string;
}) {
  return (
    <div className="card card-compact w-56 md:w-72 bg-canopy border border-moss/40 shadow-xl overflow-hidden">
      {/* Placeholder until we have real headshots */}
      <figure className="flex h-48 items-center justify-center bg-timber/60 border-b border-moss/30">
        <FaUser className="h-20 w-20 text-lichen/50" aria-hidden="true" />
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
