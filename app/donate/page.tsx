import type { Metadata } from "next";
import Banner from "@/components/banner/banner";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support King County Explorer Search & Rescue, a 501(c)(3) volunteer organization. Your donation helps fund the training and equipment behind every rescue across King County.",
  alternates: { canonical: "/donate" },
};
import DonateCard, {
  DonateCardProps,
  PaypalDonateButton,
} from "@/components/donate/card";
import BasicBody from "@/components/layout/basicbody";
import BasicLayout from "@/components/layout/basiclayout";
import Subtitle from "@/components/text/subtitle";

let donateOptions: DonateCardProps[] = [
  {
    title: "Donate via PayPal",
    text: (
      <p>
        Donate to ESAR via PayPal. You can use your PayPal account or a credit
        card.
      </p>
    ),
    imageHref: "/kcesar/donate/paypal-donate.png",
    imageAlt: "PayPal Donate Button",
    showButton: true,
    button: <PaypalDonateButton />,
  },
  {
    title: "Donate by Mail",
    text: (
      <div>
        <p>KCESAR</p>
        <p>PO Box 40152</p>
        <p>Bellevue, WA 98015</p>
        <p>Tax ID #91-1433442</p>
      </div>
    ),
    imageHref: "/kcesar/donate/mail-donate.jpg",
    imageAlt: "Photo by Joel Moysuh on Unsplash",
    showButton: false,
  },
];

// What donations pay for — drawn from the org's own description of its needs.
const impact = [
  {
    label: "Training",
    body: "A 170+ hour field program that turns volunteers into qualified search and rescue responders.",
  },
  {
    label: "Equipment",
    body: "Litters, ropes, radios, and the life-saving gear that brings lost and injured people home.",
  },
  {
    label: "Readiness",
    body: "Fuel, communications, and round-the-clock response, ready the moment a call comes in.",
  },
];

export default async function Donate() {
  return (
    <BasicLayout>
      <Banner
        title="Donate"
        eyebrow="Support Search & Rescue"
        location="/kcesar/advanced-litter/advanced-litter-32.jpg"
        alt="Rescuers navigating a litter over an obstacle"
      />
      <BasicBody>
        {/* The ask */}
        <div className="max-w-3xl text-center">
          <p className="eyebrow pb-4">100% Volunteer · 100% Donation Funded</p>
          <h1 className="font-gin text-4xl md:text-6xl tracking-wider">
            Help us answer the call
          </h1>
          <p className="text-base lg:text-lg text-bone/90 pt-6 leading-relaxed">
            King County Explorer Search &amp; Rescue is the county&apos;s primary
            wilderness ground search and rescue organization — outdoor
            enthusiasts with a passion for helping those in need. Every dollar
            for training, operations, and critical, life-saving equipment comes
            from generous donors like you.
          </p>
          <p className="text-lichen pt-4">
            Our members respond to over 150 emergencies every year.
          </p>
        </div>

        {/* Where the money goes */}
        <div className="w-full pt-16">
          <p className="eyebrow text-center pb-8">Where your donation goes</p>
          <div className="grid gap-6 md:grid-cols-3">
            {impact.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-moss/40 bg-canopy/50 p-6"
              >
                <h3 className="font-gin text-2xl tracking-wider pb-2">
                  {item.label}
                </h3>
                <p className="text-sm lg:text-base text-bone/80 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="ridgeline my-16" />

        {/* Ways to give */}
        <p className="eyebrow text-center pb-3">Ways to give</p>
        <Subtitle content="Pick what's easiest for you" />
        <div className="flex flex-wrap justify-center gap-10 pt-10">
          {donateOptions.map((option, idx) => (
            <DonateCard key={idx} props={option} />
          ))}
        </div>

        <p className="eyebrow text-center !text-lichen pt-12">
          Tax-deductible · 501(c)(3) · EIN 91-1433442
        </p>
      </BasicBody>
    </BasicLayout>
  );
}
