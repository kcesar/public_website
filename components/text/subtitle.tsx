export default function Subtitle({ content }: { content: string }) {
  return (
    <h2 className="text-center font-gin text-3xl md:text-5xl tracking-wider px-4">
      {content}
    </h2>
  );
}

export function SubSubtitle({ content }: { content: string }) {
  // Body face (not gin): a supporting subheading reads better than a second
  // display heading, especially for a full sentence.
  return (
    <h3 className="text-center font-trade-gothic-next font-semibold text-lg md:text-2xl px-4 text-bone/90">
      {content}
    </h3>
  );
}
