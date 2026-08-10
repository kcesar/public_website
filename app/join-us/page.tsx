import type { Metadata } from "next";
import Banner from "@/components/banner/banner";

export const metadata: Metadata = {
  title: "Join Us",
  description:
    "Join King County Explorer Search & Rescue. Membership is open to anyone 14 and older — learn about Basic Training and how to apply.",
  alternates: { canonical: "/join-us" },
};
import CenteredText from "@/components/text/centeredtext";
import Subtitle from "@/components/text/subtitle";
import BasicImage from "@/components/image/basicimage";
import BasicLayout from "@/components/layout/basiclayout";
import BasicBody from "@/components/layout/basicbody";
import Application from "@/components/join-us/application";
import SectionNav from "@/components/navigation/section-nav";
import { flattenPages, joinUsNav } from "@/lib/navigation";

export default async function JoinUs() {
  return (
    <BasicLayout>
      <Banner
        title="Join Us"
        eyebrow="Become a member"
        location="/kcesar/advanced-litter/advanced-litter-1.jpg"
        alt="Rescuers using a litter to evacuate a subject"
      />
      <BasicBody>
        <SectionNav items={flattenPages(joinUsNav)} label="Join Us section" />
        <div className="pt-10">
          <Application acceptingApplications={false} />
        </div>
        <div className="ridgeline my-14" />
        <Subtitle content="Joining King County Explorer Search & Rescue" />
        <CenteredText
          content="Membership in King County Explorer Search & Rescue (ESAR) is open to
        those who are age 14 and older, have a desire to help others in the
        outdoors, and are willing to respond to emergencies. In order to ensure
        that new members have the knowledge and skills necessary to positively
        and safely contribute to search and rescue operations, prospective
        members must complete King County ESAR'S Basic Training program."
        />
        <BasicImage
          location="/kcesar/advanced-litter/advanced-litter-23.jpg"
          alt="Rescuers above preparing to lower a litter"
        />
        <CenteredText
          content="Basic Training is intended for dedicated outdoor enthusiasts to
        prepare for and learn the skills necessary to serve King County as a
        first responder on search and rescue operations. The 170+ hour Basic
        Training program includes a combination of classroom sessions, overnight
        field courses, online certifications, and more. After successfully
        completing Basic Training members are field-qualified search and rescue
        responders under the Washington State Department of Emergency Management
        and the King County Sheriff's Office."
        />
        <CenteredText
          content="ESAR responders are expected to participate in search and rescue
        operations and continue to hone their skills through continuing
        education opportunities—both of which are required to remain eligible to
        serve in this capacity. Both Basic Training and ongoing unit
        participation require a significant time commitment."
        />
      </BasicBody>
    </BasicLayout>
  );
}
