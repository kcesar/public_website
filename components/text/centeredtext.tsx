export default function CenteredText({ content }: { content: string }) {
  return (
    <div className="lg:text-md text-xl py-8 text-justify px-5 lg:px-10">
      {content}
    </div>
  );
}

export function CenteredTextMinimalXPadding({ content }: { content: string }) {
  return (
    <div className="lg:text-md text-xl py-8 text-justify px-2 lg:px-5 container">
      {content}
    </div>
  );
}
