import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const MEMBERS_URL =
  "https://accounts.google.com/AccountChooser?continue=https%3A%2F%2Fsites.google.com%2Fkcesar.org%2Fmembers";

const columns = [
  {
    title: "Get Involved",
    links: [
      { label: "Join Us", href: "/join-us" },
      { label: "Donate", href: "/donate" },
      { label: "Newsletter", href: "/newsletter" },
      { label: "Members", href: MEMBERS_URL, external: true },
    ],
  },
  {
    title: "About",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our History", href: "/about/history" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Training Materials", href: "/join-us/training-materials" },
      { label: "Supplemental Mapwork", href: "/mapwork" },
      { label: "New Rescue Truck", href: "/truck" },
    ],
  },
];

function FooterLink({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  const className =
    "text-bone/80 hover:text-trail transition-colors text-sm";
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {label}
    </a>
  ) : (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-canopy border-t-2 border-esar-green text-bone">
      <div className="mx-auto max-w-6xl px-6 py-14">
        {/* CTA band */}
        <div className="flex flex-col gap-6 border-b border-moss/30 pb-12 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-gin text-3xl tracking-wider md:text-4xl">
              Support us to save lives
            </h2>
            <p className="pt-2 text-lichen">
              100% volunteer, 100% donation funded — serving King County since
              1954.
            </p>
          </div>
          <Link
            href="/donate"
            className="btn border-none bg-beacon text-timber font-stratum uppercase tracking-[0.15em] text-sm hover:bg-beacon/85 transition-colors"
          >
            Donate
          </Link>
        </div>

        {/* Identity + navigation columns */}
        <div className="grid gap-10 pt-12 md:grid-cols-4">
          <div>
            <Image
              alt=""
              src="/kcesar/logos/logo_kcesar_300x300.png"
              width={96}
              height={96}
              className="inline-block drop-shadow"
            />
            <p className="pt-4 font-bold">King County Explorer Search &amp; Rescue</p>
            <p className="pt-1 text-sm text-lichen">
              Ground search &amp; rescue for King County, Washington since 1954.
            </p>
            <div className="flex gap-4 pt-5">
              <Link
                href="https://www.facebook.com/kingcountyesar/"
                aria-label="King County ESAR on Facebook"
                className="text-bone/80 hover:text-trail transition-colors"
              >
                <FaFacebook className="h-7 w-7" aria-hidden="true" />
              </Link>
              <Link
                href="https://www.instagram.com/kingcounty_esar/"
                aria-label="King County ESAR on Instagram"
                className="text-bone/80 hover:text-trail transition-colors"
              >
                <FaInstagram className="h-7 w-7" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-10 md:col-span-3 md:grid-cols-3"
          >
            {columns.map((col) => (
              <div key={col.title}>
                <p className="eyebrow pb-4">{col.title}</p>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <FooterLink {...link} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Legal */}
        <div className="mt-12 border-t border-moss/30 pt-8">
          <p className="eyebrow !text-lichen leading-relaxed">
            501(c)(3) Volunteer Organization · EIN #91-1433442 · © 2025 KCESAR ·
            PO Box 40152 · Bellevue, WA 98015
          </p>
        </div>
      </div>
    </footer>
  );
}
