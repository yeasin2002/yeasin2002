import React from "react";
import SkillCard from "./SkillCard";

export interface Item {
  title: string;
  icon: any;
  stage: "beginner" | "intermediate" | "advance";
  reference?: string;
}

interface Props {
  skillType: Item[];
  title: string;
}

const LoopOverSkill = ({ skillType, title }: Props) => {
  return (
    <>
      <div>
        <h3 className="SubTitle"> {title}</h3>
        <div className="gap-x-3 sm:grid-cols-2 gap-y-4 md:grid-cols-3 xl:grid-cols-4 grid grid-cols-1">
          {skillType?.map((val) => (
            <SkillCard
              stage={val.stage}
              key={val.title}
              Icon={val.icon}
              link={val.reference}
            >
              {val.title}
            </SkillCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default LoopOverSkill;
