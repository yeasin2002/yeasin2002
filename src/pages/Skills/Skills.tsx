import skillData from "@/data/skillData";
import React from "react";
import LoopOverSkill from "./LoopOverSkill";

const Skills = () => {
  return (
    <section className="eachSections py-10">
      <h3 className="title">Skills</h3>
      <LoopOverSkill skillType={skillData.Language} title="Language" />
      <LoopOverSkill
        skillType={skillData.CssFramework}
        title="CSS Frameworks"
      />
      <LoopOverSkill
        skillType={skillData.JSFramework}
        title="JavaScript Frameworks / libraries"
      />
      <LoopOverSkill skillType={skillData.backEnd} title="Back End" />
      <LoopOverSkill skillType={skillData.tools} title="Tools" />
    </section>
  );
};
export default Skills;
