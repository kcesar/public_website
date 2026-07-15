import Link from "next/link";

export default function BasicLink({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="btn border-none bg-esar-green text-bone font-stratum uppercase tracking-[0.15em] text-sm hover:bg-trail hover:text-timber transition-colors"
    >
      {title}
    </Link>
  );
}
