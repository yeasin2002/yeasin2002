import skillData from "@/data/skillData";
import React from "react";
import LoopOverSkill from "./LoopOverSkill";

const Skills = () => {
  return (
    <section className="eachSections py-10"
     id="skill"
    >
      <h3 className="title">Skills</h3>
      <div className="grid justify-end flex-col ">
        <p className="flex items-center">
          <span 
          className="inline-block w-4 h-4 mr-2 rounded-full bg-red-500"
           ></span>
          <span className="text-gray-300 font-medium">
          Most comfortable with
          </span>
        </p>  
        <p className="flex items-center">
          <span 
          className="inline-block w-4 h-4 mr-2 rounded-full bg-[#166534]"
           ></span>
          <span className="text-gray-300 font-medium">
          Comprehensive skill
          </span>
        </p>  
        <p className="flex items-center">
          <span 
          className="inline-block w-4 h-4 mr-2 rounded-full bg-[#FACC15]"
           ></span>
          <span className="text-gray-300 font-medium">Familiar with </span>
        </p>  
      </div>
      <LoopOverSkill skillType={skillData.Language} title="Language" />
      {/* <LoopOverSkill skillType={skillData.CssFramework} title="Styling" /> */}
      <LoopOverSkill skillType={skillData.JSFramework} title="Front End" />
      <LoopOverSkill skillType={skillData.BackEnd} title="Back End" />
      <LoopOverSkill skillType={skillData.Tools} title="Tools" />
    </section>
  );
};
export default Skills;
