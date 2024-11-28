export default function Links({
  links,
}: {
  links: {
    title: string;
    href: string;
  }[];
}) {
  return (
    <>
      <div className="flex flex-col items-center lg:flex-row mt-[-10px]">
        {links.map((link, index) => (
          <div className="flex flex-row py-1 " key={index}>
            <div>
              <div className="rounded-md hover:bg-opacity-50 hover:bg-slate-300 text-lg px-4 py-2 list-none">
                <a href={link.href}>{link.title}</a>
              </div>
            </div>
            <div className="hidden lg:flex">
              {index != links.length - 1 ? (
                <div className="divider divider-horizontal" />
              ) : (
                <></>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
