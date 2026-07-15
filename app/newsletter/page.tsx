import type { Metadata } from "next";
import Banner from "@/components/banner/banner";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Sign up for The Dispatch, the quarterly newsletter from King County Explorer Search & Rescue, featuring wilderness safety tips and rescue stories.",
  alternates: { canonical: "/newsletter" },
};
import BasicBody from "@/components/layout/basicbody";
import BasicLayout from "@/components/layout/basiclayout";
import MailchimpSubscribeForm from "@/components/mailchimp/mailchimp-subscribe";

export default async function ContactUs() {
  let pageTitle = "The Dispatch";
  return (
    <BasicLayout>
      <Banner
        title={pageTitle}
        location="/kcesar/advanced-litter/advanced-litter-47.jpg"
        alt="Rescuers walking up a snowy trail"
      />
      <BasicBody>
        <MailchimpSubscribeForm />
      </BasicBody>
    </BasicLayout>
  );
}
