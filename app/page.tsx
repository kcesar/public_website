import Stats from "@/components/home/stats";
import Hero from "@/components/home/hero";
import GridText from "@/components/home/gridtext";
import SmallImage from "@/components/home/smallimage";
import GridImage from "@/components/home/gridimage";
import Video from "@/components/home/video";
import InstagramEmbed from "@/components/instagram/instagram";
import BasicBody from "@/components/layout/basicbody";
import BasicLayout from "@/components/layout/basiclayout";
import MountainRidge from "@/components/topo/mountain";
import Contour from "@/components/topo/contour";

export default function Home() {
  return (
    <div>
      <div>
        {/* children with negative z div */}
        <Video />
        <Hero />
      </div>
      {/* mt keeps the mountain ridge (which extends up from this section's top)
          below the fold on load — it only appears as you scroll. Must be >=
          the ridge render height so the crest starts off-screen. The divider
          line lives inside MountainRidge (at its base) so it paints on top. */}
      <div className="relative bg-base-100 pb-10 mt-32 md:mt-48">
        {/* Content rises over the hero video as a mountain silhouette */}
        <MountainRidge className="absolute bottom-full left-0 text-base-100 h-20 md:h-32" />
        {/* Ambient contour backdrop (aspect-preserving, so it never squishes on
            narrow screens); masked to ease in below the mountain. */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0, transparent 6rem, black 34rem)",
            maskImage:
              "linear-gradient(to bottom, transparent 0, transparent 6rem, black 34rem)",
          }}
        >
          <Contour opacity={0.35} className="!absolute inset-0 h-full" />
        </div>
        <div className="relative pt-10">
        <BasicLayout contour={false}>
          <BasicBody>
            <div className="hidden grid-cols-3 lg:grid gap-4 gap-y-10 place-items-stretch">
              <GridImage
                location="/kcesar/advanced-litter/advanced-litter-19.jpg"
                alt="Rescuers using a litter to take subject down a trail"
              />

              <GridText
                title="Who We Are"
                body="King County Explorer Search & Rescue (also known as KCESAR or ESAR) is the primary ground search and rescue resource in King County and the largest of seven member-units in King County Search & Rescue (KCSAR). We operate under the purview of the King County Sheriff's Office and Washington State Department of Emergency Management."
                link="/about"
                linkText="Learn More"
              />

              <GridText
                title="Join Us"
                body="King County Explorer Search & Rescue is open to both adult and youth membership. New members must complete our comprehensive basic training program which is designed to prepare them for the challenges that they will face in the field."
                link="/join-us"
                linkText="Join Us"
              />

              <GridImage
                location="/kcesar/advanced-litter/advanced-litter-41.jpg"
                alt="Rescuers packing out a subject in a litter in the forest"
              />

              <GridImage
                location="/kcesar/advanced-litter/advanced-litter-4.jpg"
                alt="Rescuers preparing the litter to take a subject down a trail"
              />

              <GridText
                title="Donate"
                body="100% Volunteer, 100% Donation Funded. King County Explorer Search & Rescue is a non-profit organization. It is donations from people like you that make Search & Rescue services possible. Please consider donating today."
                link="/donate"
                linkText="Donate Now"
              />
            </div>

            <div className="lg:hidden">
              <SmallImage
                location="/kcesar/advanced-litter/advanced-litter-19.jpg"
                alt="Rescuers using a litter to take subject down a trail"
              />
              <GridText
                title="Who We Are"
                body="ESAR is the primary ground search and rescue resource in King County and the largest of seven member-units in King County Search & Rescue (KCSAR). We operate under the purview of the King County Sheriff's Office and Washington State Department of Emergency Management."
                link="/about"
                linkText="Learn More"
              />
              <div className="ridgeline my-8" />

              <SmallImage
                location="/kcesar/advanced-litter/advanced-litter-41.jpg"
                alt="Rescuers packing out a subject in a litter in the forest"
              />
              <GridText
                title="Donate"
                body="100% Volunteer, 100% Donation Funded. King County Explorer Search & Rescue is a non-profit organization. It is donations from people like you that make Search & Rescue services possible. Please consider donating today."
                link="/donate"
                linkText="Donate Now"
              />
              <div className="ridgeline my-8" />

              <SmallImage
                location="/kcesar/advanced-litter/advanced-litter-4.jpg"
                alt="Rescuers preparing the litter to take a subject down a trail"
              />
              <GridText
                title="Join Us"
                body="King County Explorer Search & Rescue is open to both adult and youth membership. New members must complete our comprehensive basic training program which is designed to prepare them for the challenges that they will face in the field."
                link="/join-us"
                linkText="Join Us"
              />
            </div>

            <div className="ridgeline my-12" />
            <div className="relative w-full overflow-hidden rounded-lg bg-canopy/70 border border-moss/40 py-12 px-6">
              <div className="relative text-center pb-10">
                <h2 className="font-gin text-3xl md:text-4xl tracking-wider">
                  What it takes to answer the call
                </h2>
              </div>
              <div className="relative lg:grid grid-cols-3 gap-4 place-items-stretch hidden">
                <Stats number={125} description="Missions per Year" />
                <Stats number={18000} description="Training Hours per Year" />
                <Stats number={250} description="Volunteers" />
              </div>
              <div className="relative lg:hidden grid-cols-1 place-items-stretch grid gap-8">
                <Stats number={125} description="Missions per Year" />
                <Stats number={18000} description="Training Hours per Year" />
                <Stats number={250} description="Volunteers" />
              </div>
            </div>

            <div className="ridgeline my-12" />
            <div className="text-center pb-6">
              <h2 className="font-gin text-3xl md:text-4xl tracking-wider">
                KCESAR on Instagram
              </h2>
            </div>
            <div className="flex justify-center">
              <InstagramEmbed />
            </div>
          </BasicBody>
        </BasicLayout>
        </div>
      </div>
    </div>
  );
}
