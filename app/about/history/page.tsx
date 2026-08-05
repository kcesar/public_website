import type { Metadata } from "next";
import Banner from "@/components/banner/banner";

export const metadata: Metadata = {
  title: "Our History",
  description:
    "The history of King County Explorer Search & Rescue, one of the oldest volunteer search and rescue units in the United States.",
  alternates: { canonical: "/about/history" },
};
import BasicImage from "@/components/image/basicimage";
import BasicBody from "@/components/layout/basicbody";
import BasicLayout from "@/components/layout/basiclayout";
import CenteredText from "@/components/text/centeredtext";
import Subtitle from "@/components/text/subtitle";

// Key dated milestones, drawn from the narrative below.
const milestones = [
  { year: "1954", label: "Founded" },
  { year: "1957", label: "First wilderness search" },
  { year: "1972", label: "Equal membership for all" },
  { year: "150+", label: "Missions per year today" },
];

export default function History() {
  let pageTitle = "Our History";

  return (
    <BasicLayout>
      <Banner
        title={pageTitle}
        eyebrow="Since 1954"
        location="/kcesar/history/1964StampedePass01.jpg"
        alt="Rescuers walking in the snow"
      />
      <BasicBody>
        <Subtitle content="The Early Years" />
        <CenteredText
          content="King County Explorer Search & Rescue (ESAR) was founded in 1954
        as one of the first organized search and rescue teams in the country.  Today, it is
        the largest of seven member-units of King County Search & Rescue (KCSAR)
        with over 250 active members. "
        />
        <BasicImage
          location="/kcesar/history/1965NickTannerSearch06.jpg"
          alt="Rescuers standing in the snow"
        />

        {/* Milestone strip — the story at a glance */}
        <div className="w-full rounded-lg border border-moss/40 bg-canopy/50 my-14 px-6 py-10">
          <p className="eyebrow text-center pb-8">Milestones</p>
          <div className="grid gap-8 md:grid-cols-4 text-center">
            {milestones.map((m) => (
              <div key={m.label}>
                <p className="font-gin text-4xl md:text-5xl tracking-wider text-trail">
                  {m.year}
                </p>
                <p className="eyebrow !text-lichen pt-3">{m.label}</p>
              </div>
            ))}
          </div>
        </div>

        <Subtitle content="First to Welcome Youth" />
        <CenteredText
          content="ESAR was the first program in the country to accept youth members-and this was by design.
        At the time of its founding, ESAR leaders were actively looking for ways in which older youth could remain
        involved in Scouting, community service, and outdoor safety.  Don Wislon and several Seattle Mountain Rescue
        (SMR) members with Scouting backgrounds-Bill Pitts, Max Eckenburg, and Ome Diaber-helped lay the groundwork
        to create the organization that we have today.  ESAR was originally affiliated with the Boy Scouts of America
        (BSA) Learning for Life program (where the “Explorer” portion of its name stemmed from), and while it is not
        directly associated with Scouting as it once was, ESAR still maintains a Post with the BSA.
        Trainees are expected to understand how to prevent hypothermia, to be
        aware of the conditions around them, and to take care of themselves and
        their team. Basic Training requires approximately 170 hours including
        four overnight-weekends, several full-day and evening classroom
        sessions, and a combination of homework and independent on-line
        learning."
        />
        <BasicImage
          location="/kcesar/history/1965NickTannerSearch01.jpg"
          alt="Rescuers walking towards a helicopter"
        />

        <div className="ridgeline my-14" />

        <Subtitle content="A Team for Everyone" />
        <CenteredText
          content="In its early years, Scouting's rules did not allow for women to participate in ESAR.
        In 1969, women were included in the creation of the commissary unit, which was established to support missions.
        By 1972, the opportunity for full and equal field status and membership was extended to everyone.
        1956 marked ESAR's first request for service by the Seattle Police.  In 1957,
        the unit's first wilderness search was successfully conducted for a lost Boy Scout in Mount Rainier
        National Park.  Throughout the 1950s and 1960s, ESAR had approximately ten missions per year.  By the
        1990s, the annual mission totals increased to 30 to 40 missions.  Today, ESAR responds to over 150 missions
        per year, and it is not uncommon-particularly in the peak season (late spring and early summer)--for the
        unit to respond to three or more calls in a single day, sometimes on the same trail.  In 2017, ESAR's volunteers
        logged over 21,000 person-hours, with as many was 2,900 hours on a single search."
        />
        <BasicImage
          location="/kcesar/history/EvidenceSearches06.jpg"
          alt="Two women working on paperwork"
        />
      </BasicBody>
    </BasicLayout>
  );
}
