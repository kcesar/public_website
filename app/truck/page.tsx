import type { Metadata } from "next";
import Banner from "@/components/banner/banner";

export const metadata: Metadata = {
  title: "New Rescue Truck",
  description:
    "Help King County Explorer Search & Rescue fund a new rescue truck — vital equipment that supports our leaders and teams in the field.",
  alternates: { canonical: "/truck" },
};
import BasicImage from "@/components/image/basicimage";
import BasicBody from "@/components/layout/basicbody";
import BasicLayout from "@/components/layout/basiclayout";
import CenteredText from "@/components/text/centeredtext";
import Subtitle from "@/components/text/subtitle";
import Link from "next/link";

export default async function Truck() {
  return (
    <BasicLayout>
      <Banner
        title="New Rescue Truck"
        eyebrow="Capital campaign"
        location="/kcesar/advanced-litter/advanced-litter-12.jpg"
        alt="Rescuers working on hillside"
      />
      <BasicBody>
        <Subtitle content="Will you help us?" />
        <CenteredText content="We are raising funds to purchase a new rescue truck.  Please consider donating to help us reach our goal. A rescue truck is vital to the daily operations we conduct and helps support our leaders and teams in the field." />
        <Link
          href="/donate"
          className="btn border-none bg-beacon text-timber font-stratum uppercase tracking-[0.15em] text-sm hover:bg-beacon/85 transition-colors"
        >
          Donate to the campaign
        </Link>
        <BasicImage
          location="/kcesar/new_truck/truck-render.png"
          alt="A preview render of a future rescue truck"
        />
        <div className="ridgeline my-14" />
        <div className="w-full h-120 md:h-280 flex justify-center">
          <iframe
            title="Rescue truck replacement proposal (PDF)"
            className="w-full rounded-lg border border-moss/40"
            src="/kcesar/new_truck/rescue-truck-replacement-2024.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
          />
        </div>
      </BasicBody>
    </BasicLayout>
  );
}
