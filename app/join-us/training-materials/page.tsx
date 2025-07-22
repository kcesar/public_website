import Banner from "@/components/banner/banner";
import BasicLayout from "@/components/layout/basiclayout";
import Subtitle from "@/components/text/subtitle";
import LinkCard from "./linkcard";
import TrainingCalendar from "./trainingcalendar";
import { getTrainingSessions } from "./trainingdates";
import BasicBody from "@/components/layout/basicbody";
import Links from "@/components/join-us/links";
import { links } from "../links";
import CenteredText from "@/components/text/centeredtext";
import MailchimpSubscribeForm from "@/components/mailchimp/mailchimp-subscribe";

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
            href="/assets/doc/ESAR_TrainingPacket.pdf"
          />
          <LinkCard
            title="2025 Parent Packet - Youth"
            content="Information for parents of youth members regarding training, requirements, and expectations."
            href="/assets/doc/Parent_Packet_2025_Final.pdf"
          />
          <LinkCard
            title="Code of Conduct"
            content="King County Explorer Search and Rescue's offical document concerning personnel conduct."
            href="/assets/doc/KCESAR_Code_of_Conduct.pdf"
          />
          <LinkCard
            title="48hr Pack List"
            content='Official gear list for a "48 hour" backpack, used in training and mission response.'
            href="/assets/doc/48_Hour_Pack_2022.pdf"
          />
          <LinkCard
            title="Training Schedule"
            content="Google Calendar Embed"
            href="https://calendar.google.com/calendar/embed?src=kcesar.org_4r2brjkoml90hilp9h73t2lgno%40group.calendar.google.com&ctz=America%2FLos_Angeles"
          />
        </div>
        <div className="divider py-10"></div>
        <div id="training-calendar" />
        <div className="pb-10">
          <Subtitle content="2025-2026 Training Season" />
        </div>
        <MailchimpSubscribeForm />
        <div className="divider" />
        <div className="pt-10">
          <Subtitle content="Training Calendar" />
        </div>
        <div className="p-5">
          <div className="italic">
            <CenteredText content="We strive to follow the established schedule; however, unforeseen circumstances may occasionally necessitate changes to the planned dates. While such instances are rare, they do occur. Please note that successful completion of all courses is required to complete basic training." />
          </div>
          <TrainingCalendar sessions={trainingSessions} />
        </div>
      </BasicBody>
    </BasicLayout>
  );
}
