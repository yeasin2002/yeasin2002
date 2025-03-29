import skillData from "@/data/skillData";
import React from "react";
import LoopOverSkill from "./LoopOverSkill";

const Skills = () => {
  return (
    <section className="w-full px-4 pb-3 pt-10 py-10" id="skill">
      <h3 className="silver-text flex items-center justify-center text-2xl  font-bold">
        Skills
      </h3>

      <LoopOverSkill skillType={skillData.FrontEnd} title="Front End" />
      <LoopOverSkill skillType={skillData.BackEnd} title="Back End" />
      <LoopOverSkill skillType={skillData.Tools} title="Others" />
      {/* <LoopOverSkill skillType={skillData.Vision} title="Vision / Exploring" /> */}
    </section>
  );
};
export default Skills;
