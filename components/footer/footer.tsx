import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-esar-green text-white px-4 py-8">
      <aside>
        <h2 className="font-gin text-3xl md:text-4xl tracking-wider">
          Support us to save lives
        </h2>
        <Image
          alt=""
          src="/kcesar/logos/logo_kcesar_300x300.png"
          width={150}
          height={150}
          priority={true}
          className="drop-shadow py-5 inline-block"
        />
        <p className="font-bold max-w-md">
          King County Explorer Search & Rescue <br />
          Providing search & rescue services to King County since 1954
        </p>
        <p className="eyebrow !text-white/80 pt-2 leading-relaxed">
          501(c)(3) Volunteer Organization · EIN #91-1433442
        </p>
        <p className="eyebrow !text-white/80">
          © 2025 KCESAR · PO Box 40152 · Bellevue, WA 98015
        </p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link href="https://www.facebook.com/kingcountyesar/" aria-label="King County ESAR on Facebook">
            <FaFacebook className="w-10 h-10" aria-hidden="true" />
          </Link>
          <Link href="https://www.instagram.com/kingcounty_esar/" aria-label="King County ESAR on Instagram">
            <FaInstagram className="w-10 h-10" aria-hidden="true" />
          </Link>
        </div>
      </nav>
    </footer>
  );
}
