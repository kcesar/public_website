export default function Subtitle({ content }: { content: string }) {
  return (
    <h2 className="text-center text-3xl md:text-4xl font-bold tracking-widest px-4">
      {content}
    </h2>
  );
}
