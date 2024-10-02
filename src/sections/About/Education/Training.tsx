import TrainingCard from "./TrainingCard";

//  Assets
import lws from "@/assets/avatar/Academy/lws.svg";
import react from "@/assets/icons/skill_icons/React-Dark.svg";
import redux from "@/assets/icons/skill_icons/Redux.svg";

const Training = () => {
  return (
    <div>
      <TrainingCard
        courseName="Think in a redux way"
        courseInstitute="Learn with sumit"
        desc="Batch 1"
        imageData={redux}
        courseInstituteImg={lws}
        certificateUrl={"/LWS-Certificate.pdf"}
      />
      <TrainingCard
        courseName="Reactive Accelerator"
        courseInstitute="Learn with sumit"
        imageData={react}
        desc="Batch 1"
        courseInstituteImg={lws}
        certificateUrl="rnext.pdf"
      />
    </div>
  );
};
export default Training;
