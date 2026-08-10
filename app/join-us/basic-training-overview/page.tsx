import type { Metadata } from "next";
import Banner from "@/components/banner/banner";
import BasicLink from "@/components/navigation/basiclink";
import BasicLayout from "@/components/layout/basiclayout";
import CenteredText from "@/components/text/centeredtext";
import Subtitle from "@/components/text/subtitle";
import BasicImage from "@/components/image/basicimage";
import BasicBody from "@/components/layout/basicbody";
import SectionNav from "@/components/navigation/section-nav";
import Breadcrumbs from "@/components/navigation/breadcrumbs";
import { flattenPages, joinUsNav } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Basic Training Overview",
  description:
    "An overview of ESAR Basic Training — the roughly 170-hour program that prepares new members to safely contribute to wilderness search and rescue.",
  alternates: { canonical: "/join-us/basic-training-overview" },
};

export default async function BasicTrainingOverview() {
  return (
    <BasicLayout>
      <Banner
        title="Join Us"
        eyebrow="Become a member"
        location="/kcesar/advanced-litter/advanced-litter-1.jpg"
        alt="Rescuers using a litter to evacuate a subject"
      />
      <BasicBody>
        <Breadcrumbs />
        <SectionNav items={flattenPages(joinUsNav)} label="Join Us section" />
        <div className="pt-8" />
        <Subtitle content="Basic Training Overview" />
        <CenteredText
          content="ESAR Basic Training is a comprehensive program designed to prepare new
        members to serve their community as first responders on search and
        rescue operations. It will prepare them for the challenges that they
        will face in the field and to respond to missions as a member of the
        unit. Trainees will receive instruction and demonstrate proficiency in
        wilderness navigation, survival skills, search method theory, first aid,
        and evidence search procedures. Basic Training begins in September and
        runs through March. It is purposefully scheduled during the winter
        months to give trainees experience working in the challenging conditions
        they could encounter on a mission. Training may involve snow, ice, wind,
        rain, and other unpleasant situations. Trainees are expected to
        understand how to prevent hypothermia, to be aware of the conditions
        around them, and to take care of themselves and their team."
        />
        <BasicImage
          location="/kcesar/advanced-litter/advanced-litter-7.jpg"
          alt="Rescuers evacuating a subject"
        />
        <CenteredText
          content="Basic Training requires 170+ hours including four overnight-weekends,
        several full-day and evening classroom sessions, and a combination of
        homework and independent on-line learning. All courses are pass/fail and
        some trainees may need to repeat one or more additional weekends to
        successfully complete the series. For additional information about the
        training please download a copy of the Basic Training Orientation
        Packet."
        />
        <BasicImage
          location="/kcesar/advanced-litter/advanced-litter-33.jpg"
          alt="Rescuers moving the litter down the trail"
        />
        <div className="ridgeline my-14" />
        <Subtitle content="Training Materials" />
        <div className="pt-6">
          {/* "Download Here" named a link that goes to a page, not a file, and
              read as a bare "here" out of context. */}
          <BasicLink
            href="/join-us/training-materials"
            title="Browse training materials"
          />
        </div>
      </BasicBody>
    </BasicLayout>
  );
}
