import Banner from "@/components/banner/banner";
import DonateCard, {
  DonateCardProps,
  PaypalDonateButton,
} from "@/components/donate/card";
import BasicImage from "@/components/image/basicimage";
import BasicBody from "@/components/layout/basicbody";
import BasicLayout from "@/components/layout/basiclayout";
import BasicLink from "@/components/navigation/basiclink";
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

export default async function Donate() {
  return (
    <BasicLayout>
      <Banner
        title="Donate"
        location="/kcesar/advanced-litter/advanced-litter-32.jpg"
        alt="Rescuers navigating a litter over an obstacle"
      />
      <BasicBody>
        <Subtitle content="King County Explorer Search & Rescue (ESAR) is a 501(c)(3) Volunteer Organization" />
        <div className="py-5" />
        Our members respond to over 150 emergencies every year.
        <div className="py-4" />
        ESAR is King County's primary wilderness ground search and rescue organization. Our members are outdoor enthusiasts with a passion for helping those in need. 100% of funding for training, operations, and critical, life-saving equipment comes from generous donations by local businesses, the communities that we serve, our volunteers, and people like you.
        <div className="divider py-5" />
        <Subtitle content="General Donations: Here's a few easy ways to donate!" />
        <div className="flex flex-wrap justify-center gap-10 pt-10">
          {donateOptions.map((option, idx) => (
            <DonateCard key={idx} props={option} />
          ))}
        </div>
      </BasicBody>
    </BasicLayout>
  );
}
