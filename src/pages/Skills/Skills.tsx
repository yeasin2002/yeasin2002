import skillData from "@/data/skillData";
import React from "react";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section className="eachSections py-10">
      <h3 className="title">Skill</h3>
      <div>
        front end
        <div className="gap-x-2 grid grid-cols-4">
          {skillData?.FrontEnd.map((val) => (
            <SkillCard stage={val.stage} key={val.title} Icon={val.icon}>
              {val.title}
            </SkillCard>
          ))}
        </div>
      </div>
      {/*  back end  */}
      <div>
        Back End
        <div className="gap-x-2 grid grid-cols-4">
          {skillData?.backEnd.map((val) => (
            <SkillCard stage={val.stage} key={val.title} Icon={val.icon}>
              {val.title}
            </SkillCard>
          ))}
        </div>
      </div>

      {/*  Tools  */}
      <div>
        Tools
        <div className="gap-x-2 grid grid-cols-4">
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
