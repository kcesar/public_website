import type { Metadata } from "next";
import Banner from "@/components/banner/banner";
import BasicBody from "@/components/layout/basicbody";
import BasicLayout from "@/components/layout/basiclayout";
import Subtitle from "@/components/text/subtitle";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with King County Explorer Search & Rescue. In a backcountry or any other emergency, always call 911 first.",
  alternates: { canonical: "/contact-us" },
};

function ContactRow({ role, email }: { role: string; email: string }) {
  return (
    <div className="pt-2">
      <p className="eyebrow !text-lichen pb-1">{role}</p>
      <Link
        href={`mailto:${email}`}
        className="text-trail hover:text-trail/70 inline-flex items-center gap-2 transition-colors"
      >
        {email}
        <FaEnvelope className="h-4 w-4" aria-hidden="true" />
      </Link>
    </div>
  );
}

function ContactCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card bg-canopy border border-moss/40 w-80 shadow-xl">
      <div className="card-body">
        <h2 className="font-gin text-2xl tracking-wider text-bone pb-1">
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
}

export default async function ContactUs() {
  return (
    <BasicLayout>
      <Banner
        title="Contact Us"
        eyebrow="How to reach us"
        location="/kcesar/advanced-litter/advanced-litter-47.jpg"
        alt="Rescuers walking up a snowy trail"
      />
      <BasicBody>
        {/* Emergency: the most important thing on this page */}
        <div
          role="alert"
          className="w-full max-w-2xl rounded-lg border-2 border-error/60 bg-error/10 text-center px-6 py-8"
        >
          <p className="eyebrow !text-error pb-3">Reporting an emergency?</p>
          <p className="font-gin text-5xl md:text-6xl tracking-wider text-error">
            Call 911
          </p>
          <p className="pt-4 text-bone/90 max-w-xl mx-auto">
            King County Search &amp; Rescue resources must be requested by the
            King County Sheriff&apos;s Office SAR Coordinator.
          </p>
        </div>

        <div className="ridgeline my-14" />

        <p className="eyebrow pb-3">Get in touch</p>
        <Subtitle content="Contacts" />
        <div className="flex flex-wrap justify-center gap-8 pt-10">
          <ContactCard title="KCESAR Contacts">
            <ContactRow role="President" email="president@kcesar.org" />
            <ContactRow role="Board of Directors" email="bod@kcesar.org" />
            <ContactRow
              role="Public Information Officer"
              email="pio@kcesar.org"
            />
          </ContactCard>

          <ContactCard title="Training Contacts">
            <ContactRow role="Training Admin" email="training.admin@kcesar.org" />
          </ContactCard>

          <ContactCard title="Other Contacts">
            <ContactRow
              role="Recruiting Coordinator"
              email="recruiting@kcesar.org"
            />
            <ContactRow role="Youth Coordinator" email="youth@kcesar.org" />
            <ContactRow
              role="Fundraising Coordinator"
              email="fundraising@kcesar.org"
            />
            <ContactRow
              role="Public Events Coordinator"
              email="events@kcesar.org"
            />
          </ContactCard>
        </div>
      </BasicBody>
    </BasicLayout>
  );
}
