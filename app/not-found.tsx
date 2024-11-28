import Banner from "@/components/banner/banner";
import BasicLayout from "@/components/layout/basiclayout";
import BasicLink from "@/components/navigation/basiclink";
import Subtitle from "@/components/text/subtitle";

export default function NotFound() {
  return (
    <BasicLayout>
      <Banner
        title="404 - Not Found"
        location="/kcesar/middle-fork.jpg"
        alt="Photo by Dominic Hampton on Unsplash"
      />
      <Subtitle content="Are you lost? We can help with that!" />
      <div className="py-10" />
      <BasicLink title="Let's get you home safe" href="/" />
      <div className="py-10" />
    </BasicLayout>
  );
}
