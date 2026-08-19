import type { Metadata } from "next";
import Banner from "@/components/banner/banner";
import BasicLayout from "@/components/layout/basiclayout";
import Subtitle from "@/components/text/subtitle";
import LinkCard from "./linkcard";
import TrainingCalendar from "./trainingcalendar";
import { getTrainingSessions } from "./trainingdates";
import BasicBody from "@/components/layout/basicbody";
import SectionNav from "@/components/navigation/section-nav";
import Breadcrumbs from "@/components/navigation/breadcrumbs";
import OnThisPage from "@/components/navigation/on-this-page";
import { flattenPages, joinUsNav } from "@/lib/navigation";
import CenteredText from "@/components/text/centeredtext";
import MailchimpSubscribeForm from "@/components/mailchimp/mailchimp-subscribe";

export const metadata: Metadata = {
  title: "Training Materials & Schedule",
  description:
    "Training materials, orientation packets, and the course schedule for King County ESAR Basic Training.",
  alternates: { canonical: "/join-us/training-materials" },
};

// Same-page jump targets. These ids live on the <section> elements below, which
// carry scroll-mt-24 so the sticky navbar does not cover the heading landed on.
const SECTIONS = [
  { title: "Materials", href: "#training-materials" },
  { title: "Newsletter", href: "#newsletter" },
  { title: "Training Calendar", href: "#training-calendar" },
];

export default async function TrainingMaterials() {
  const trainingSessions = getTrainingSessions();

  return (
    <BasicLayout>
      <Banner
        title="Join Us"
        eyebrow="Become a member"
        location="/kcesar/advanced-litter/advanced-litter-1.jpg"
        alt="Rescuers walking in field"
      />

      <BasicBody>
        <Breadcrumbs />
        <SectionNav items={flattenPages(joinUsNav)} label="Join Us section" />
        <OnThisPage items={SECTIONS} />

        <section
          id="training-materials"
          aria-labelledby="training-materials-heading"
          className="w-full scroll-mt-24 pt-8"
        >
          <div id="training-materials-heading">
            <Subtitle content="Training Materials" />
          </div>
          <div className="flex flex-wrap justify-center gap-10 pt-10">
            <LinkCard
              title="Basic Training Orientation Packet"
              content="Information surrounding basic training including membership requirements, training courses overview, and more."
              href="/assets/doc/ESAR_TrainingPacket_202627.pdf"
              kind="document"
            />
            <LinkCard
              title="Parent Packet - Youth"
              content="Information for parents of youth members regarding training, requirements, and expectations."
              href="/parent-packet"
              kind="document"
            />
            <LinkCard
              title="Code of Conduct"
              content="King County Explorer Search and Rescue's offical document concerning personnel conduct."
              href="/assets/doc/KCESAR_Code_of_Conduct.pdf"
              kind="document"
            />
            <LinkCard
              title="48hr Pack List"
              content='Official gear list for a "48 hour" backpack, used in training and mission response.'
              href="/assets/doc/48_Hour_Pack_2022.pdf"
              kind="document"
            />
            <LinkCard
              title="Supplemental Mapwork"
              content="Review and practice mapwork problems similar to those used in training."
              href="/join-us/training-materials/mapwork"
              kind="page"
            />
          </div>
        </section>

        <div className="ridgeline my-14" />

        {/* id="training-calendar" previously sat here, above the newsletter
            form, so the "Training Calendar" link landed on the wrong section.
            The newsletter gets its own id; the calendar id moves to the calendar. */}
        <section
          id="newsletter"
          aria-label="Newsletter signup"
          className="w-full scroll-mt-24"
        >
          <MailchimpSubscribeForm />
        </section>

        <div className="ridgeline my-14" />

        <section
          id="training-calendar"
          aria-labelledby="training-calendar-heading"
          className="w-full scroll-mt-24 pt-2"
        >
          <div id="training-calendar-heading">
            <p className="eyebrow text-center pb-3">2026-27 season</p>
            <Subtitle content="Training Calendar" />
          </div>
          <div className="p-5">
            <div className="italic">
              <CenteredText content="We strive to follow the established schedule; however, unforeseen circumstances may occasionally necessitate changes to the planned dates. While such instances are rare, they do occur. Please note that successful completion of all courses is required to complete basic training." />
            </div>
            <TrainingCalendar sessions={trainingSessions} />
          </div>
        </section>
      </BasicBody>
    </BasicLayout>
  );
}
