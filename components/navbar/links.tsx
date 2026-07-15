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
        <ul className="inline-flex flex-row text-bone font-stratum uppercase tracking-[0.12em] text-sm gap-2">
          {navlinks.map((link, index) => (
            <li
              key={index}
              className="rounded-md px-4 py-2 hover:bg-moss/25 hover:text-trail transition-colors"
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
