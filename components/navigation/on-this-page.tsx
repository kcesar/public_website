/**
 * In-page jump list.
 *
 * Deliberately separate from SectionNav: mixing "go to another page" and "jump
 * to a section of this page" into one undifferentiated strip was what made the
 * old training-materials nav confusing. Cross-page links live in SectionNav,
 * same-page anchors live here.
 *
 * Targets need `scroll-mt-*` so they clear the sticky navbar when jumped to.
 */
export default function OnThisPage({
  items,
}: {
  items: { title: string; href: string }[];
}) {
  return (
    <nav aria-labelledby="on-this-page" className="w-full py-4">
      <h2
        id="on-this-page"
        className="text-center text-sm font-bold uppercase tracking-widest opacity-70"
      >
        On this page
      </h2>
      <ul className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 pt-2">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="rounded-md px-3 py-1 underline underline-offset-4 hover:bg-slate-300/50 hover:text-esar-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-esar-green dark:hover:bg-neutral-900"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
