import Banner from "@/components/banner/banner";
import BasicLayout from "@/components/layout/basiclayout";
import BasicLink from "@/components/navigation/basiclink";
import Subtitle from "@/components/text/subtitle";

export default function NotFound() {
  return (
    <BasicLayout>
      <Banner
        title="404 - Not Found"
        eyebrow="Off the map"
        location="/kcesar/middle-fork.jpg"
        alt="Photo by Dominic Hampton on Unsplash"
      />
      <div className="flex flex-col items-center px-4 py-16">
        <p className="eyebrow pb-4">Nothing here</p>
        <Subtitle content="Are you lost? We can help with that!" />
        <div className="pt-8">
          <BasicLink title="Let's get you home safe" href="/" />
        </div>
      </div>
    </BasicLayout>
  );
}
