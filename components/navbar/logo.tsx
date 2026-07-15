import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="btn btn-ghost btn-circle avatar mx-2">
      <Link href="/" aria-label="King County Explorer Search & Rescue — home" className="flex items-center">
        <div className="w-12 rounded-full inline-block">
          <Image
            alt="King County Explorer Search & Rescue logo"
            src="/kcesar/logos/logo_kcesar_300x300.png"
            width={300}
            height={300}
          />
        </div>
      </Link>
    </div>
  );
}
