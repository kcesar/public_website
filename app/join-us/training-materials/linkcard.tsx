import BasicLink from "@/components/navigation/basiclink";

export default function LinkCard({
  title,
  content,
  href,
  label = 'Download',
}: {
  title: string;
  content: string;
  href: string;
  label?: string;
}) {
  return (
    <div className="card bg-canopy border border-moss/40 w-96 shadow-xl">
      <div className="card-body">
        <h2 className="font-gin text-xl tracking-wide text-bone">{title}</h2>
        <p className="text-bone/80">{content}</p>
        <div className="card-actions justify-end pt-2">
          <BasicLink href={href} title={label} />
        </div>
      </div>
    </div>
  );
}
