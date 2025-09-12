import Banner from "@/components/banner/banner";
import BasicBody from "@/components/layout/basicbody";
import BasicLayout from "@/components/layout/basiclayout";
import CenteredText from "@/components/text/centeredtext";
import MappingProblems from "./mappingProblems";
import ToolsAndReview from "./toolsAndReview";
import UnitConversion from "./unitConversion";
import PacingProblems from "./pacingProblems";

export default async function MapWork() {
  let pageTitle = "Supplemental Mapwork";
  return (
    <BasicLayout>
      <Banner
        title={pageTitle}
        location="/kcesar/advanced-litter/advanced-litter-47.jpg"
        alt="Rescuers walking up a snowy trail"
      />
      <BasicBody>
        <CenteredText
          content='In response to many of our trainees asking for additional practice mapwork 
          we have compiled a series of supplemental problems that you can use to self-study. 
          These example questions are similar to the type of work you will be completing during 
          training. Each problem has the answer hidden. When you are ready to check your work 
          simply click "Show/Hide Answer" to reveal the solution. Click again to hide it.'
        />
        <div className="tabs tabs-border w-full">

          <input type="radio" name="mapwork" className="tab" aria-label="Tools & Review" defaultChecked />
          <div className="tab-content border-base-300 bg-base-100 p-10">
            <ToolsAndReview />
          </div>

          <input type="radio" name="mapwork" className="tab" aria-label="Unit Conversion" />
          <div className="tab-content border-base-300 bg-base-100 p-10">
            <UnitConversion />
          </div>

          <input type="radio" name="mapwork" className="tab" aria-label="Pacing Problems" />
          <div className="tab-content border-base-300 bg-base-100 p-10">
            <PacingProblems />
          </div>

          <input type="radio" name="mapwork" className="tab" aria-label="Mapping Problems" />
          <div className="tab-content border-base-300 bg-base-100 p-10">
            <MappingProblems />
          </div>
        </div>
      </BasicBody>
    </BasicLayout>
  );
}
