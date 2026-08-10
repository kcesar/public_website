"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { findTrail } from "@/lib/navigation";

/**
 * Ancestor trail for nested pages, derived from lib/navigation rather than from
 * the URL, so the crumb labels match the words used everywhere else.
 *
 * Renders nothing on top-level pages, where a breadcrumb would just be noise.
 */
export default function Breadcrumbs() {
  const pathname = usePathname();
  const trail = findTrail(pathname);

  // trail[0] is the section root; with nothing above the current page there is
  // no hierarchy worth showing.
  if (trail.length < 2) return null;

  const crumbs = [{ title: "Home", href: "/" }, ...trail];

  return (
    <nav aria-label="Breadcrumb" className="w-full pb-4">
      <ol className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm">
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          return (
            <li key={crumb.href} className="flex items-center gap-x-2">
              {isLast ? (
                // The current page is not a link -- there is nowhere to go --
                // but it stays in the list so the trail reads completely.
                <span aria-current="page" className="font-semibold">
                  {crumb.title}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="underline underline-offset-4 hover:text-esar-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-esar-green"
                >
                  {crumb.title}
                </Link>
              )}

              {!isLast && (
                <span aria-hidden="true" className="opacity-60">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
