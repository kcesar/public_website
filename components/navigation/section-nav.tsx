"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isCurrentPage, NavNode } from "@/lib/navigation";

/**
 * Cross-page navigation within a section (e.g. the Join Us pages).
 *
 * Replaces the old div-soup version, which rendered bare <a> tags -- forcing a
 * full document load on every hop between training pages -- and gave assistive
 * tech no way to tell which page was currently open.
 */
export default function SectionNav({
  items,
  label,
}: {
  items: NavNode[];
  label: string;
}) {
  const pathname = usePathname();

  return (
    <nav aria-label={label} className="w-full">
      <ul className="flex flex-col items-center lg:flex-row lg:justify-center">
        {items.map((item, index) => {
          const current = isCurrentPage(item, pathname);
          return (
            <li key={item.href} className="flex flex-row items-center py-1">
              <Link
                href={item.href}
                // aria-current is what actually communicates "you are here";
                // the styling below is only the sighted equivalent.
                aria-current={current ? "page" : undefined}
                className={[
                  "rounded-md px-4 py-2 text-lg transition-colors",
                  "hover:bg-slate-300/50 dark:hover:bg-neutral-900",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-esar-green",
                  current
                    ? "font-bold underline decoration-esar-green decoration-2 underline-offset-8"
                    : "",
                ].join(" ")}
              >
                {item.title}
              </Link>

              {index < items.length - 1 && (
                <div
                  aria-hidden="true"
                  className="divider divider-horizontal hidden lg:flex"
                />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
