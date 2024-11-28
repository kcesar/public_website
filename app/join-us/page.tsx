import Banner from "@/components/banner/banner";
import CenteredText from "@/components/text/centeredtext";
import Subtitle from "@/components/text/subtitle";
import BasicImage from "@/components/image/basicimage";
import BasicLayout from "@/components/layout/basiclayout";
import BasicBody from "@/components/layout/basicbody";
import Application from "@/components/join-us/application";
import Links from "@/components/join-us/links";
import { links } from "./links";

export default async function JoinUs() {
  return (
    <BasicLayout>
      <Banner
        title="Join Us"
        location="/kcesar/advanced-litter/advanced-litter-1.jpg"
        alt="Rescuers using a litter to evacuate a subject"
      />
      <BasicBody>
        <Links links={links} />
        <div className="pt-10">
          <Application acceptingApplications={false} />
        </div>
        <div className="divider pb-10" />
        <Subtitle content="Joining King County Explorer Search & Rescue" />
        <CenteredText
          content="Membership in King County Explorer Search & Rescue (ESAR) is open to
        those who are age 14 and older, have a desire to help others in the
        outdoors, and are willing to respond to emergencies whenever possible.
        In order to ensure that new members have the knowledge and skills
        necessary to positively and safely contribute to search and rescue
        operations, prospective members must complete King County ESAR'S
        Basic Training program."
        />
        <BasicImage
          location="/kcesar/advanced-litter/advanced-litter-23.jpg"
          alt="Rescuers above preparing to lower a litter"
        />
        <CenteredText
          content="The 170+ hour Basic Training program includes a combination of classroom, 
        overnight field courses, online certifications and more.  Once training is complete, our members 
        are field-qualified Search and Rescue responders under the Washington State Department of Emergency 
        Management and the King County Sheriff's Office.  Members maintain their training and certifications 
        through mission participation and continuing education. "
        />
      </BasicBody>
    </BasicLayout>
  );
}
