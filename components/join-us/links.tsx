export default function Links({
  links,
}: {
  links: {
    title: string;
    href: string;
  }[];
}) {
  return (
    <div className="flex flex-col items-center lg:flex-row lg:gap-1">
      {links.map((link, index) => (
        <div className="flex flex-row items-center" key={index}>
          <a
            href={link.href}
            className="rounded-md px-4 py-2 font-stratum uppercase tracking-wide text-sm text-bone hover:bg-moss/25 hover:text-trail transition-colors"
          >
            {link.title}
          </a>
          {index != links.length - 1 && (
            <div className="hidden lg:block h-4 w-px bg-moss/50" />
          )}
        </div>
      ))}
    </div>
  );
}
