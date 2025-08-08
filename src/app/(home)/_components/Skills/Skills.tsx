import skillData from "@/app/(home)/_data/skillData";
import React from "react";
import LoopOverSkill from "./LoopOverSkill";

export const Skills = () => {
  return (
    <section
      className="sections-container w-full px-4 pb-3 pt-10 py-10 space-y-10"
      id="skill"
    >
      <LoopOverSkill skillType={skillData.FrontEnd} title="Front End" />
      <LoopOverSkill skillType={skillData.BackEnd} title="Back End" />
      <LoopOverSkill skillType={skillData.Tools} title="Others" />
    </section>
  );
};
