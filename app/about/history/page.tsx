import Banner from "@/components/banner/banner";
import BasicImage from "@/components/image/basicimage";
import BasicBody from "@/components/layout/basicbody";
import BasicLayout from "@/components/layout/basiclayout";
import CenteredText from "@/components/text/centeredtext";
import Subtitle from "@/components/text/subtitle";

export default function History() {
  let pageTitle = "Our History";

  return (
    <BasicLayout>
      <Banner
        title={pageTitle}
        location="/kcesar/history/1964StampedePass01.jpg"
        alt="Rescuers walking in the snow"
      />
      <BasicBody>
        <Subtitle content="The Early Years" />
        <CenteredText
          content="King County Explorer Search & Rescue (ESAR) was founded in 1954 
        as one of the first organized search and rescue teams in the country.  Today, it is 
        the largest of nine member-units of the King County Search & Rescue Association (KCSARA) 
        with over 250 active members. "
        />
        <BasicImage
          location="/kcesar/history/1965NickTannerSearch06.jpg"
          alt="Rescuers standing in the snow"
        />
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
