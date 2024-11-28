"use client";

import Link from "next/link";
import Logo from "@/components/navbar/logo";
import { usePathname } from "next/navigation";

export default function Links() {
  let pathname = usePathname();

  return (
    <>
      <div className="navbar-center hidden md:flex">
        <ul className="inline-flex flex-row text-slate-50 gap-4">
          <li className="rounded-md hover:bg-opacity-25 hover:bg-slate-300 px-4 py-2">
            <Link href="/about">About Us</Link>
          </li>
          <li className="rounded-md hover:bg-opacity-25 hover:bg-slate-300 px-4 py-2">
            <Link href="/join-us">Join Us</Link>
          </li>

          <li className="rounded-md hover:bg-opacity-25 hover:bg-slate-300 px-4 py-2">
            <Link href="/contact-us">Contact Us</Link>
          </li>
          <li className="rounded-md hover:bg-opacity-25 hover:bg-slate-300 px-4 py-2">
            <a href="https://sites.google.com/kcesar.org/members">Members</a>
          </li>
        </ul>
      </div>
      {pathname !== "/" && (
        <div className="navbar-center md:hidden z-10">
          <Logo />
        </div>
      )}
    </>
  );
}
