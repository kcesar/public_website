import Banner from "@/components/banner/banner";
import BasicImage from "@/components/image/basicimage";
import BasicBody from "@/components/layout/basicbody";
import BasicLayout from "@/components/layout/basiclayout";
import CenteredText from "@/components/text/centeredtext";
import Subtitle from "@/components/text/subtitle";

export default async function Truck() {
  return (
    <BasicLayout>
      <Banner
        title="New Rescue Truck"
        location="/kcesar/advanced-litter/advanced-litter-12.jpg"
        alt="Rescuers working on hillside"
      />
      <BasicBody>
        <Subtitle content="Will you help us?" />
        <CenteredText content="We are raising funds to purchase a new rescue truck.  Please consider donating to help us reach our goal. A rescue truck is vital to the daily operations we conduct and helps support our leaders and teams in the field." />
        <BasicImage
          location="/kcesar/new_truck/truck-render.png"
          alt="A preview render of a future rescue truck"
        />
        <div className="w-full h-[30rem] md:h-[70rem] p-10 flex justify-center">
          <iframe
            className="w-full"
            src="/kcesar/new_truck/rescue-truck-replacement-2024.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
          />
        </div>
      </BasicBody>
    </BasicLayout>
  );
}
