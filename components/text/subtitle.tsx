export default function Subtitle({ content }: { content: string }) {
  return (
    <h2 className="text-center text-3xl md:text-4xl font-bold tracking-widest px-4">
      {content}
    </h2>
  );
}

export function SubSubtitle({ content }: { content: string }) {
  return (
    <h3 className="text-center text-xl md:text-2xl font-bold tracking-widest px-4">
      {content}
    </h3>
  );
}
