import { FaFacebook } from "react-icons/fa";
import BasicLink from "@/components/navigation/basiclink";
import CenteredText from "@/components/text/centeredtext";
import Subtitle from "@/components/text/subtitle";
import Link from "next/link";

export default function Application({
  acceptingApplications,
}: {
  acceptingApplications: boolean;
}) {
  if (acceptingApplications) {
    return (
      <div className="flex flex-col items-center">
        <Subtitle content="Ready to Apply?" />
        <div className="pt-8">
          <BasicLink title="Apply Now" href="#" />
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
