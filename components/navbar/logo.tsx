import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <div
      tabIndex={0}
      role="button"
      className="btn btn-ghost btn-circle avatar mx-2"
    >
      <Link href="/">
        <div className="w-12 rounded-full inline-block">
          <Image
            alt="Tailwind CSS Navbar component"
            src="/kcesar/logos/logo_kcesar_300x300.png"
            width={300}
            height={300}
          />
        </div>
      </Link>
    </div>
  );
}
