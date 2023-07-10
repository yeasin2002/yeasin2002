import skillData from "@/data/skillData";
import React from "react";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section className="eachSections py-10">
      <h3 className="title">Skill</h3>
      <div>
        <h3 className="SubTitle"> Front End</h3>
        <div className="eachSkill">
          {skillData?.FrontEnd.map((val) => (
            <SkillCard stage={val.stage} key={val.title} Icon={val.icon}>
              {val.title}
            </SkillCard>
          ))}
        </div>
      </div>

      {/*  back end  */}
      <div>
        <h3 className="SubTitle">Back End</h3>
        <div className="eachSkill">
          {skillData?.backEnd.map((val) => (
            <SkillCard stage={val.stage} key={val.title} Icon={val.icon}>
              {val.title}
            </SkillCard>
          ))}
        </div>
      </div>

      {/*  Tools  */}
      <div>
        <h3 className="SubTitle">Tools</h3>
        <div className="eachSkill">
          {skillData?.tools.map((val) => (
            <SkillCard stage={val.stage} key={val.title} Icon={val.icon}>
              {val.title}
            </SkillCard>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
