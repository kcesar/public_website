import BasicLink from "@/components/navigation/basiclink";

export default function LinkCard({
  title,
  content,
  href,
}: {
  title: string;
  content: string;
  href: string;
}) {
  return (
    <div className="card bg-base-300 w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-xl">{title}</h2>
        <p>{content}</p>
        <div className="card-actions justify-end">
          <BasicLink href={href} title="Download" />
        </div>
      </div>
    </div>
  );
}
