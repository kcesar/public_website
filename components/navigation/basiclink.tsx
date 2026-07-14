import Link from "next/link";

export default function BasicLink({
  title,
  href,
  className = "",
}: {
  title: string;
  href: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`btn bg-esar-green hover:bg-base-300 text-white border-none ${className}`}
    >
      {title}
    </Link>
  );
}
