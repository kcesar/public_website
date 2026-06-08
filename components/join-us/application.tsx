import BasicLink from "@/components/navigation/basiclink";
import { ActuallyCenteredText } from "@/components/text/centeredtext";
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
      <div className="flex flex-col items-center pb-6">
        <Subtitle content="Thank you for your interest in joining KCESAR." />
        <div className="pt-6">
          <SubSubtitle
            content="Joining ESAR is a 7-month process generally beginning in August and ending in March.  Information about applications and scheduling for the 2026-27 training season will be released in July."
          />
        </div>
        <div className="pt-2">
          <ActuallyCenteredText
            content={
              <>
                To stay informed about future training cycles please sign up for
                our{" "}
                <Link
                  className="text-blue-500 underline"
                  href="https://www.kcesar.org/join-us/training-materials#training-calendar"
                >
                  newsletter
                </Link>{" "}
                and follow us on{" "}
                <Link
                  className="text-blue-500 underline"
                  href="https://www.facebook.com/kingcountyesar"
                >
                  Facebook
                </Link>{" "}
                and{" "}
                <Link
                  className="text-blue-500 underline"
                  href="https://www.instagram.com/kingcounty_esar"
                >
                  Instagram
                </Link>
                .
              </>
            }
          />
          <div className="flex flex-col items-center gap-2">
            <BasicLink
              title="Basic Training Overview"
              href="https://www.kcesar.org/join-us/basic-training-overview"
            />
          </div>
        </div>
      </div>
    );
  }
}
