import Link from "next/link";
import { FaArrowUpRightFromSquare, FaFilePdf } from "react-icons/fa6";
import { NavKind, isNewTab } from "@/lib/navigation";

const ACTION_LABEL: Record<NavKind, string> = {
  document: "Download",
  external: "Open",
  page: "View",
  section: "Go to",
};

/**
 * A single training resource.
 *
 * The old version gave every card's link the same accessible name ("Download"),
 * so anything that lists links out of context -- a screen reader's link rotor,
 * for instance -- showed four indistinguishable entries. The visible label is
 * still short, but `aria-label` now carries the resource name and its type.
 * The visible text remains a substring of the accessible name, which is what
 * WCAG "Label in Name" requires.
 */
export default function LinkCard({
  title,
  content,
  href,
  kind = "document",
  label,
}: {
  title: string;
  content: string;
  href: string;
  kind?: NavKind;
  label?: string;
}) {
  const action = label ?? ACTION_LABEL[kind];
  const newTab = isNewTab({ title, href, kind });

  const typeSuffix =
    kind === "document" ? " (PDF)" : kind === "external" ? " (opens in a new tab)" : "";
  const accessibleName = `${action} ${title}${typeSuffix}`;

  // Mirrors BasicLink's styling; inlined because BasicLink takes no aria-label
  // and these links need one to be distinguishable out of context.
  const className =
    "btn border-none bg-esar-green text-bone font-stratum uppercase tracking-[0.15em] text-sm hover:bg-trail hover:text-timber transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-trail";

  const inner = (
    <>
      {action}
      {kind === "document" && <FaFilePdf aria-hidden="true" />}
      {kind === "external" && <FaArrowUpRightFromSquare aria-hidden="true" />}
    </>
  );

  return (
    <div className="card bg-canopy border border-moss/40 w-96 shadow-xl">
      <div className="card-body">
        {/* h3: these sit under the page's "Training Materials" h2. */}
        <h3 className="font-gin text-xl tracking-wide text-bone">{title}</h3>
        <p className="text-bone/80">{content}</p>
        <div className="card-actions justify-end pt-2">
          {newTab ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={accessibleName}
              className={className}
            >
              {inner}
            </a>
          ) : (
            <Link href={href} aria-label={accessibleName} className={className}>
              {inner}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
