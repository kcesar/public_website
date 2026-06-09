import type { Metadata } from "next";
import Banner from "@/components/banner/banner";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with King County Explorer Search & Rescue. In a backcountry or any other emergency, always call 911 first.",
  alternates: { canonical: "/contact-us" },
};
import BasicBody from "@/components/layout/basicbody";
import BasicLayout from "@/components/layout/basiclayout";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa6";

export default async function ContactUs() {
  let pageTitle = "Contact Us";
  return (
    <BasicLayout>
      <Banner
        title={pageTitle}
        location="/kcesar/advanced-litter/advanced-litter-47.jpg"
        alt="Rescuers walking up a snowy trail"
      />
      <BasicBody>
        <div className="flex flex-col text-center justify-center pb-5 px-4">
          <h2 className="pb-5">Reporting an emergency?</h2>
          <p className="text-red-600 text-3xl md:text-5xl font-bold">Call 911</p>
          <p className="pt-5 px-8">
            King County Search & Rescue Resources must be requested by the King
            County Sheriff&apos;s Office SAR Coordinator.
          </p>
        </div>
        <div className="divider"></div>
        <div className="flex flex-wrap justify-center gap-10 pt-10">
          <div className="card bg-base-200 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-3xl">KCESAR Contacts</h2>
              <h3>President</h3>
              <Link
                href={`mailto:president@kcesar.org`}
                className="text-blue-600 hover:text-blue-400"
              >
                president@kcesar.org
                <FaEnvelope className="h-6 w-6 inline-block ml-3" />
              </Link>
              <h3>Board of Directors</h3>
              <Link
                href={`mailto:bod@kcesar.org`}
                className="text-blue-600 hover:text-blue-400"
              >
                bod@kcesar.org
                <FaEnvelope className="h-6 w-6 inline-block ml-3" />
              </Link>
              <h3>Public Information Officer</h3>
              <Link
                href={`mailto:pio@kcesar.org`}
                className="text-blue-600 hover:text-blue-400"
              >
                pio@kcesar.org
                <FaEnvelope className="h-6 w-6 inline-block ml-3" />
              </Link>
            </div>
          </div>
          <div className="card bg-base-200 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-3xl">Training Contacts</h2>
              <h3>Training Admin</h3>
              <Link
                href={`mailto:training.admin@kcesar.org`}
                className="text-blue-600 hover:text-blue-400"
              >
                training.admin@kcesar.org
                <FaEnvelope className="h-6 w-6 inline-block ml-3" />
              </Link>
            </div>
          </div>
          <div className="card bg-base-200 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-3xl">Other Contacts</h2>
              <h3>Recruiting Coordinator</h3>
              <Link
                href={`mailto:recruiting@kcesar.org`}
                className="text-blue-600 hover:text-blue-400"
              >
                recruiting@kcesar.org
                <FaEnvelope className="h-6 w-6 inline-block ml-3" />
              </Link>
              <h3>Youth Coordinator</h3>
              <Link
                href={`mailto:youth@kcesar.org`}
                className="text-blue-600 hover:text-blue-400"
              >
                youth@kcesar.org
                <FaEnvelope className="h-6 w-6 inline-block ml-3" />
              </Link>
              <h3>Fundraising Coordinator</h3>
              <Link
                href={`mailto:fundraising@kcesar.org`}
                className="text-blue-600 hover:text-blue-400"
              >
                fundraising@kcesar.org
                <FaEnvelope className="h-6 w-6 inline-block ml-3" />
              </Link>
              <h3>Public Events Coordinator</h3>
              <Link
                href={`mailto:events@kcesar.org`}
                className="text-blue-600 hover:text-blue-400"
              >
                events@kcesar.org
                <FaEnvelope className="h-6 w-6 inline-block ml-3" />
              </Link>
            </div>
          </div>
        </div>
      </BasicBody>
    </BasicLayout>
  );
}
