export default function CenteredText({ content }: { content: string }) {
  return (
    <div className="w-full max-w-4xl mx-auto text-lg lg:text-xl py-8 text-left">
      {content}
    </div>
  );
}

export function CenteredTextMinimalXPadding({ content }: { content: string }) {
  return (
    <div className="lg:text-md text-xl py-8 text-left px-2 lg:px-5 container">
      {content}
    </div>
  );
}

export function ActuallyCenteredText({ content }: { content: React.ReactNode | string }) {
  return (
    <div className="w-full max-w-4xl mx-auto text-lg lg:text-xl py-8 text-center">
      {content}
    </div>
  );
}
