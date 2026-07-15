export default function Subtitle({ content }: { content: string }) {
  return (
    <h2 className="text-center font-gin text-3xl md:text-5xl tracking-wider px-4">
      {content}
    </h2>
  );
}

export function SubSubtitle({ content }: { content: string }) {
  return (
    <h3 className="text-center font-gin text-xl md:text-3xl tracking-wider px-4">
      {content}
    </h3>
  );
}
