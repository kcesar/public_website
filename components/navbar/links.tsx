"use client";

import Link from "next/link";
import Logo from "@/components/navbar/logo";
import { usePathname } from "next/navigation";
import { NavLink } from "./navlink";

export default function Links({ navlinks }: { navlinks: NavLink[] }) {
  let pathname = usePathname();

  return (
    <>
      <div className="navbar-center hidden md:flex">
        <ul className="inline-flex flex-row text-slate-50 gap-4">
          {navlinks.map((link, index) => (
            <li
              key={index}
              className="rounded-md hover:bg-base-300/70 px-4 py-2 hover:text-black dark:hover:text-slate-50"
            >
              {link.external ? (
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              ) : (
                <Link href={link.href}>{link.label}</Link>
              )}
            </li>
          ))}
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
