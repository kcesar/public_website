"use client";

import Link from "next/link";
import { FaBarsStaggered } from "react-icons/fa6";
import Logo from "./logo";
import { NavNode } from "@/lib/navigation";
import MailchimpSubscibeModal from "../mailchimp/mailchimp-subscribe-modal";
import DonateButton from "../donate/button";

export default function Drawer({ navlinks }: { navlinks: NavNode[] }) {
  // Close the drawer by unchecking the daisyUI toggle when a link is clicked.
  const closeDrawer = () => {
    const toggle = document.getElementById("my-drawer");
    if (toggle instanceof HTMLInputElement) toggle.checked = false;
  };

  return (
    <div className="drawer z-20">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="flex items-center gap-2 px-2">
          <label htmlFor="my-drawer" className="md:hidden">
            <span className="sr-only">Open navigation menu</span>
            <FaBarsStaggered aria-hidden="true" className="h-6 w-6 pl-2 text-white" />
          </label>
          <div className="hidden md:inline-block">
            <Logo />
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu min-h-full w-80 bg-base-200 p-4">
          <li className="rounded hover:bg-esar-green hover:text-white">
            <Link href="/" onClick={closeDrawer}>
              <h3>Home</h3>
            </Link>
          </li>

          {navlinks.map((link) => {
            const children = link.children ?? [];
            return (
            <li key={link.href}>
              {link.kind === "external" ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded hover:bg-esar-green hover:text-white"
                >
                  <h3>{link.title}</h3>
                </a>
              ) : (
                <Link
                  href={link.href}
                  onClick={closeDrawer}
                  className="rounded hover:bg-esar-green hover:text-white"
                >
                  <h3>{link.title}</h3>
                </Link>
              )}

              {/* Nested pages are listed inline rather than behind a toggle --
                  in a full-height drawer there is room, and it means every
                  nested page is reachable without a second interaction. */}
              {children.length > 0 && (
                <ul>
                  {children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        onClick={closeDrawer}
                        className="rounded hover:bg-esar-green hover:text-white"
                      >
                        {child.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            );
          })}

          <li className="pointer-events-none grow bg-inherit" />
          <li>
            <MailchimpSubscibeModal />
          </li>
          <li className="flex items-center">
            <DonateButton />
          </li>
          <li className="pointer-events-none">
            <div className="flex items-center justify-center p-4">
              <Logo />
              <p className="text-center">
                &copy; 2025 King County Explorer Search & Rescue
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
