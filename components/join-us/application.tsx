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
          <SubSubtitle content="Sign-ups for our 2026-27 training season are now open!" />
        </div>
        <div className="pt-2">
          <ActuallyCenteredText
            content={
              <>
                If you&rsquo;re ready to begin your journey toward joining us
                and becoming a first responder in King County, click{" "}
                <Link
                  className="text-trail underline hover:text-trail/70"
                  href="/course-a-registration"
                >
                  HERE
                </Link>{" "}
                to register for Course A. There are four Course A sessions
                scheduled&mdash;on September 2nd, 3rd, 8th, and 10th. But spots
                are limited, so don&rsquo;t delay! View the full training
                schedule{" "}
                <Link
                  className="text-trail underline hover:text-trail/70"
                  href="/join-us/training-materials#training-calendar"
                >
                  HERE
                </Link>
                .
              </>
            }
          />
          <ActuallyCenteredText content="Information about Basic Training is available here:" />
          <div className="flex flex-col items-center gap-2">
            <BasicLink
              title="Basic Training Overview"
              href="/join-us/basic-training-overview"
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center pb-6">
        <Subtitle content="Thank you for your interest in joining KCESAR!" />
        <div className="pt-6">
          <SubSubtitle
            content={
              'Training for 2026-27 will run from September through March. ' +
              'Registration for the first course—“Course A”—will open here, in mid-August.'
            }
          />
        </div>
        <div className="pt-2">
          <ActuallyCenteredText
            content={
              <>
                To stay informed about future training cycles please sign up for
                our{" "}
                <Link
                  className="text-trail underline hover:text-trail/70"
                  href="/join-us/training-materials#training-calendar"
                >
                  newsletter
                </Link>{" "}
                and follow us on{" "}
                <Link
                  className="text-trail underline hover:text-trail/70"
                  href="https://www.facebook.com/kingcountyesar"
                >
                  Facebook
                </Link>{" "}
                and{" "}
                <Link
                  className="text-trail underline hover:text-trail/70"
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
              href="/join-us/basic-training-overview"
            />
          </div>
        </div>
      </div>
    );
  }
}
