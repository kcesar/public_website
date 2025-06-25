import { FaFacebook } from "react-icons/fa";
import BasicLink from "@/components/navigation/basiclink";
import CenteredText, {
  ActuallyCenteredText,
} from "@/components/text/centeredtext";
import Subtitle, { SubSubtitle } from "@/components/text/subtitle";
import Link from "next/link";

export default function Application({
  acceptingApplications,
}: {
  acceptingApplications: boolean;
}) {
  if (acceptingApplications) {
    return (
      <div className="flex flex-col items-center pb-6">
        <Subtitle content="Ready to Apply?" />
        <div className="pt-6">
          <SubSubtitle content="Training season is now underway." />
        </div>
        <div className="pt-2">
          <ActuallyCenteredText content="Registration for Course A, the first step in 2025-26 training, is open. See the training schedule for more information, including the registration link. " />
          <div className="flex flex-col items-center gap-2">
            <BasicLink
              title="Training Calendar"
              href="https://www.kcesar.org/join-us/training-materials#training-calendar"
            />
          </div>
          <ActuallyCenteredText content="Information about Basic Training is available here:" />
          <div className="flex flex-col items-center gap-2">
            <BasicLink
              title="Basic Training Overview"
              href="https://www.kcesar.org/join-us/basic-training-overview"
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center gap-4 pb-6">
        <Subtitle content="Ready to Apply?" />
        <div className="pt-4 flex flex-col items-center">
          <CenteredText content="Training season is now underway and we are not currently accepting applications. Please join the KCESAR Interest Facebook page below and check back next spring!" />
          <Link
            href="https://www.facebook.com/groups/2354290631533498/"
            className="btn bg-esar-green hover:bg-base-300 text-white border-none"
          >
            <FaFacebook />
            King County ESAR Interest
          </Link>
        </div>
      </div>
    );
  }
}
