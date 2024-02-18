import { OswaldFont } from "@/utils/GoogleFonts";
import React from "react";
import SkillCard from "./SkillCard";

export interface Item {
  title: string;
  icon: any;
  stage: "beginner" | "intermediate" | "advance";
  reference?: string;
  additionalMessage?: string;
}

interface Props {
  skillType: Item[];
  title: string;
}

const LoopOverSkill = ({ skillType, title }: Props) => {
  return (
    <>
      <div>
        <h3
          className={
            "SubTitle text-lg font-bold md:text-xl " + OswaldFont.className
          }
        >
          {" "}
          {title}
        </h3>
        <div className="grid grid-cols-1 gap-x-3 gap-y-4 sm:grid-cols-2 md:grid-cols-4 md:gap-x-4 xl:grid-cols-4 xl:gap-x-6 2xl:gap-x-8">
          {skillType?.map((val, index) => (
            <SkillCard
              title={val.title}
              stage={val.stage}
              key={val.title}
              icon={val.icon}
              reference={val.reference}
              index={index}
            ></SkillCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default LoopOverSkill;
