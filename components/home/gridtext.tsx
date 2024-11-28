import BasicLink from "@/components/navigation/basiclink";
import Subtitle from "@/components/text/subtitle";
import { CenteredTextMinimalXPadding } from "@/components/text/centeredtext";

export default function GridText({
  title,
  body,
  link,
  linkText,
}: {
  title: string;
  body: string;
  link: string;
  linkText: string;
}) {
  return (
    <div className="flex items-center flex-col justify-center">
      <Subtitle content={title} />
      <CenteredTextMinimalXPadding content={body} />
      <BasicLink title={linkText} href={link} />
    </div>
  );
}
