import Banner from "@/components/banner/banner";
import BasicLayout from "@/components/layout/basiclayout";
import Subtitle from "@/components/text/subtitle";
import LinkCard from "./linkcard";
import TrainingCalendar from "./trainingcalendar";
import { getTrainingSessions } from "./trainingdates";
import BasicBody from "@/components/layout/basicbody";
import Links from "@/components/join-us/links";
import { links } from "../links";

export default async function TrainingMaterials() {
  let trainingSessions = getTrainingSessions();
  return (
    <BasicLayout>
      <Banner
        title="Join Us"
        location="/kcesar/advanced-litter/advanced-litter-1.jpg"
        alt="Rescuers walking in field"
      />

      <BasicBody>
        <Links links={links} />
        <div className="pt-5" />
        <div id="traning-materials" />
        <Subtitle content="Training Materials" />
        <div className="flex flex-wrap justify-center gap-10 pt-10">
          <LinkCard
            title="Basic Training Orientation Packet"
            content="Information surrounding basic training including membership requirements, training courses overview, and more."
            href="https://kcesar.org/assets/doc/ESAR_TrainingPacket.pdf"
          />
          <LinkCard
            title="Code of Conduct"
            content="King County Explorer Search and Rescue's offical document concerning personnel conduct."
            href="https://kcesar.org/assets/doc/KCESAR_Code_of_Conduct.pdf"
          />
          <LinkCard
            title="48hr Pack List"
            content='Official gear list for a "48 hour" backpack, used in training and mission response.'
            href="https://kcesar.org/assets/doc/48_Hour_Pack_2022.pdf"
          />
          <LinkCard
            title="Training Schedule"
            content="Google Calendar Embed"
            href="https://calendar.google.com/calendar/embed?src=kcesar.org_4r2brjkoml90hilp9h73t2lgno%40group.calendar.google.com&ctz=America%2FLos_Angeles"
          />
        </div>
        <div className="divider py-10"></div>
        <div id="training-calendar" />
        <Subtitle content="2024-2025 Training Season" />
        <div className="p-5">
          <TrainingCalendar sessions={trainingSessions} />
        </div>
      </BasicBody>
    </BasicLayout>
  );
}
