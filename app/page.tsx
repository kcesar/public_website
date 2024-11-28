import Stats from "@/components/home/stats";
import Hero from "@/components/home/hero";
import GridText from "@/components/home/gridtext";
import SmallImage from "@/components/home/smallimage";
import GridImage from "@/components/home/gridimage";
import Video from "@/components/home/video";
import InstagramEmbed from "@/components/instagram/instagram";
import BasicBody from "@/components/layout/basicbody";
import BasicLayout from "@/components/layout/basiclayout";

export default function Home() {
  return (
    <div>
      <div>
        {/* children with negative z div */}
        <Video />
        <Hero />
      </div>
      <div className="bg-base-100 py-10">
        <BasicLayout>
          <BasicBody>
            <div className="hidden grid-cols-3 lg:grid gap-4 gap-y-10 place-items-stretch">
              <GridImage
                location="/kcesar/advanced-litter/advanced-litter-19.jpg"
                alt="Rescuers using a litter to take subject down a trail"
              />

              <GridText
                title="Who We Are"
                body="King County Explorer Search & Rescue (also known as KCESAR or ESAR) is the primary ground search and rescue resource in King County and the largest of nine member-units in the King County Search & Rescue Association. We operate under the purview of the King County Sheriff's Office and Washington State Department of Emergency Management."
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
                body="ESAR is the primary ground search and rescue resource in King County and the largest of nine member-units in the King County Search & Rescue Association. We operate under the purview of the King County Sheriff's Office and Washington State Department of Emergency Management."
                link="/about"
                linkText="Learn More"
              />
              <div className="divider"></div>

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
              <div className="divider"></div>

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

            <div className="divider pt-10"></div>
            <div className="p-8">
              <h1 className="font-bold">KCESAR by the numbers:</h1>
            </div>
            <div className="lg:grid grid-cols-3 gap-4 place-items-stretch hidden">
              <Stats number={125} description="Missions per Year" />
              <Stats number={18000} description="Training Hours per Year" />
              <Stats number={250} description="Volunteers" />
            </div>
            <div className="lg:hidden grid-cols-1 place-items-stretch grid pb-16">
              <Stats number={125} description="Missions per Year" />
              <div className="divider"></div>
              <Stats number={18000} description="Training Hours per Year" />
              <div className="divider"></div>
              <Stats number={250} description="Volunteers" />
            </div>
            <div className="divider py-10"></div>
            <h1 className="font-bold py-6">KCESAR on Instagram!</h1>
            <div className="flex justify-center">
              <InstagramEmbed />
            </div>
          </BasicBody>
        </BasicLayout>
      </div>
    </div>
  );
}
