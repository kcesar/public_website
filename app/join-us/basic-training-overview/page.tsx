import Banner from "@/components/banner/banner";
import BasicLink from "@/components/navigation/basiclink";
import BasicLayout from "@/components/layout/basiclayout";
import CenteredText from "@/components/text/centeredtext";
import Subtitle from "@/components/text/subtitle";
import BasicImage from "@/components/image/basicimage";
import BasicBody from "@/components/layout/basicbody";
import Links from "@/components/join-us/links";
import { links } from "../links";

export default async function BasicTrainingOverview() {
  return (
    <BasicLayout>
      <Banner
        title="Join Us"
        location="/kcesar/advanced-litter/advanced-litter-1.jpg"
        alt="Rescuers using a litter to evacuate a subject"
      />
      <BasicBody>
        <Links links={links} />
        <div className="pt-5" />
        <Subtitle content="Basic Training Overview" />
        <CenteredText
          content="ESAR Basic Training is a comprehensive program designed to prepare new
        members for the challenges that they will face in the field. As a
        trainee, you will receive instruction and demonstrate proficiency in
        wilderness navigation, survival skills, search method theory, first aid,
        and evidence search procedures. Basic Training begins in July and runs through April. 
        It is purposefully scheduled during the winter months to give trainees experience working
        in the challenging conditions they could encounter on a mission.
        Training may involve snow, ice, wind, rain, and other unpleasant
        situations."
        />
        <BasicImage
          location="/kcesar/advanced-litter/advanced-litter-7.jpg"
          alt="Rescuers evacuating a subject"
        />
        <CenteredText
          content="Trainees are expected to understand how to prevent hypothermia, to be
        aware of the conditions around them, and to take care of themselves and
        their team. Basic Training requires approximately 170 hours including
        four overnight-weekends, several full-day and evening classroom
        sessions, and a combination of homework and independent on-line
        learning. All courses are pass/fail and some trainees may need to repeat one or
        more additional weekends to successfully complete the series. For
        additional information about the training and courses, please download a
        copy of the Basic Training Orientation Packet."
        />
        <BasicImage
          location="/kcesar/advanced-litter/advanced-litter-33.jpg"
          alt="Rescuers moving the litter down the trail"
        />
        <div className="divider py-10"></div>
        <Subtitle content="Training Materials:" />
        <br />
        <BasicLink href="/join-us/training-materials" title="Download Here" />
      </BasicBody>
    </BasicLayout>
  );
}
