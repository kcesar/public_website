"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import Logo from "@/components/navbar/logo";
import { isCurrentPage, NavNode, pagePath } from "@/lib/navigation";

/** True when `pathname` is the node itself or anything beneath it. */
function isInSection(node: NavNode, pathname: string): boolean {
  const base = pagePath(node.href).replace(/\/+$/, "");
  return pathname === base || pathname.startsWith(`${base}/`);
}

export default function Links({ navlinks }: { navlinks: NavNode[] }) {
  const pathname = usePathname();
  // The pathname the menu was opened on is stored alongside which menu is open,
  // so a navigation implicitly closes it. Deriving this beats an effect that
  // resets state on pathname change, which costs an extra render pass.
  const [open, setOpen] = useState<{ href: string; pathname: string } | null>(
    null,
  );
  const openHref = open?.pathname === pathname ? open.href : null;
  const navRef = useRef<HTMLDivElement>(null);

  const setOpenHref = (href: string | null) =>
    setOpen(href === null ? null : { href, pathname });

  useEffect(() => {
    if (openHref === null) return;

    // setOpen (the raw setter) is referentially stable, so the effect does not
    // need to re-subscribe on every render the way setOpenHref would force.
    const onPointerDown = (event: MouseEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setOpen(null);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(null);
      // Escape must hand focus back to the control that opened the menu,
      // or keyboard users are dropped at the top of the document.
      navRef.current
        ?.querySelector<HTMLButtonElement>(`[data-submenu-toggle="${openHref}"]`)
        ?.focus();
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openHref]);

  const itemClass =
    "rounded-md px-4 py-2 hover:bg-moss/25 hover:text-trail transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-trail";

  return (
    <>
      <div className="navbar-center hidden md:flex" ref={navRef}>
        <ul className="inline-flex flex-row items-center gap-2 font-stratum text-sm uppercase tracking-[0.12em] text-bone">
          {navlinks.map((link) => {
            const children = link.children ?? [];
            const submenuId = `submenu-${pagePath(link.href).replace(/\W+/g, "-")}`;
            const expanded = openHref === link.href;

            return (
              <li key={link.href} className="relative">
                <div className="flex flex-row items-center">
                  {link.kind === "external" ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={itemClass}
                    >
                      {link.title}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      aria-current={
                        isCurrentPage(link, pathname) ? "page" : undefined
                      }
                      className={`${itemClass} ${
                        isInSection(link, pathname) ? "text-trail" : ""
                      }`}
                    >
                      {link.title}
                    </Link>
                  )}

                  {/* The parent stays a real link; this separate control opens
                      the submenu. Collapsing both into one button would remove
                      the only route to the section landing page. */}
                  {children.length > 0 && (
                    <button
                      type="button"
                      data-submenu-toggle={link.href}
                      aria-expanded={expanded}
                      aria-controls={submenuId}
                      aria-label={`${expanded ? "Hide" : "Show"} ${link.title} pages`}
                      onClick={() => setOpenHref(expanded ? null : link.href)}
                      className="rounded-md p-2 transition-colors hover:bg-moss/25 hover:text-trail focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-trail"
                    >
                      <FaChevronDown
                        aria-hidden="true"
                        className={`h-3 w-3 transition-transform ${expanded ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}
                </div>

                {children.length > 0 && (
                  <ul
                    id={submenuId}
                    hidden={!expanded}
                    className="absolute left-0 top-full z-50 mt-1 min-w-64 rounded-md border border-moss/40 bg-timber/95 p-2 shadow-xl backdrop-blur"
                  >
                    {children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          aria-current={
                            isCurrentPage(child, pathname) ? "page" : undefined
                          }
                          className="block rounded px-3 py-2 text-bone transition-colors hover:bg-moss/25 hover:text-trail focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-trail"
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
        </ul>
      </div>

      {pathname !== "/" && (
        <div className="navbar-center z-10 md:hidden">
          <Logo />
        </div>
      )}
    </>
  );
}
