import Banner from "@/components/banner/banner";
import Card from "./card";
import BasicLayout from "@/components/layout/basiclayout";
import Subtitle from "@/components/text/subtitle";
import BasicBody from "@/components/layout/basicbody";
import CenteredText from "@/components/text/centeredtext";
import BasicLink from "@/components/navigation/basiclink";

export default async function About() {
  let people = [
    {
      personName: "Valon Miller",
      title: "President",
      location: "/kcesar/middle-fork.jpg",
      alt: "Photo by Dominic Hampton on Unsplash",
      email: "president@kcesar.org",
    },
    {
      personName: "Brian Swett",
      title: "Director of Operations",
      location: "/kcesar/middle-fork.jpg",
      alt: "Photo by Dominic Hampton on Unsplash",
      email: "operations@kcesar.org",
    },
    {
      personName: "Nancy Ward",
      title: "Director of Training",
      location: "/kcesar/middle-fork.jpg",
      alt: "Photo by Dominic Hampton on Unsplash",
      email: "training@kcesar.org",
    },
    {
      personName: "Matt Patterson",
      title: "Treasurer",
      location: "/kcesar/middle-fork.jpg",
      alt: "Photo by Dominic Hampton on Unsplash",
      email: "treasurer@kcesar.org",
    },
    {
      personName: "Amber Cosand",
      title: "Secretary",
      location: "/kcesar/middle-fork.jpg",
      alt: "Photo by Dominic Hampton on Unsplash",
      email: "secretary@kcesar.org",
    },
  ];

  return (
    <BasicLayout>
      <Banner
        title="About"
        eyebrow="King County · Since 1954"
        location="/kcesar/advanced-litter/advanced-litter-8.jpg"
        alt="Rescuers standing"
      />
      <BasicBody>
        <p className="eyebrow pb-3">Our story</p>
        <Subtitle content="Who We Are" />
        <CenteredText
          content='King County Explorer Search & Rescue was founded in 1954 as one of the
          first organized search and rescue teams in the country, and the first
          to accept youth members. The "Explorer" in Explorer Search &
          Rescue comes from ESAR&apos;s affiliation with the Boy Scouts of
          America Learning for Life program. King County ESAR still maintains a
          Post with the Boy Scouts of America but we are not as directly
          associated with Scouting as we once were. Today, we are the largest of
          nine member-units of the King County Search & Rescue Association
          (KCSARA) and accept both adult and youth members each training season.'
        />

        <BasicLink title="Our History" href="/about/history" />

        <div className="ridgeline my-14" />

        <p className="eyebrow pb-3">Leadership</p>
        <Subtitle content="Who Keeps Us Running" />
        <div className="flex flex-wrap justify-center gap-8 pt-10">
          {people.map((person) => (
            <Card
              key={person.personName}
              personName={person.personName}
              title={person.title}
              email={person.email}
              location={person.location}
              alt={person.alt}
            ></Card>
          ))}
        </div>

        <div className="ridgeline my-14" />

        <p className="eyebrow pb-3">Transparency</p>
        <Subtitle content="Annual Report" />
        <div className="w-full h-120 md:h-280 pt-10 flex justify-center">
          <iframe
            className="w-full rounded-lg border border-moss/40"
            src="/kcesar/annual-report/2023-annual-report.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
          />
        </div>
      </BasicBody>
    </BasicLayout>
  );
}
