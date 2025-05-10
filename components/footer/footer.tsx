import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer footer-center bg-esar-green text-white px-4 py-5">
      <aside>
        <h1 className="font-bold text-2xl">Support us to save lives.</h1>
        <Image
          alt="Tailwind CSS Navbar component"
          src="/kcesar/logos/logo_kcesar_300x300.png"
          width={150}
          height={150}
          priority={true}
          className="drop-shadow py-5 inline-block"
        />
        <p className="font-bold">
          King County Explorer Search & Rescue <br />
          Providing search & rescue services to King County since 1954
          <br />
          <br />
          King County Explorer Search & Rescue (ESAR) is a 501(c)(3) Volunteer
          Organization
          <br />
          <br />
          EIN #91-1433442
        </p>
        <p>© 2024 KCESAR • PO Box 40152 • Bellevue, WA 98015</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link href="https://www.facebook.com/kingcountyesar/">
            <FaFacebook className="w-10 h-10" />
          </Link>
          <Link href="https://www.instagram.com/kingcounty_esar/">
            <FaInstagram className="w-10 h-10" />
          </Link>
        </div>
      </nav>
    </footer>
  );
}
