import React from "react";
import Image from "next/image";

//  icons and types
import { BiLinkExternal as CopyIcons } from "react-icons/bi";
import { Item } from "./LoopOverSkill";

export interface cardProps extends Item {
  children: React.ReactNode;
}

const SkillCard = ({ children, icon, stage, reference = "" }: cardProps) => {
  let textColor;
  if (stage === "beginner") {
    textColor = "shadow-amethyst";
  } else if (stage === "intermediate") {
    textColor = "shadow-fog";
  } else {
    textColor = "shadow-teal-700";
  }
  return (
    <div
      className={`${textColor} select-none group    bg-sup text-conf font-medium capitalize hover:bg-gray-200 flex items-center py-2 md:py-3 transition-all rounded-sm shadow-md`}
    >
      <div className="into-center w-full">
        <div className="mx-4">
          <Image
            src={icon}
            alt={"Icons"}
            className="w-7 h-7 pointer-events-none"
          />
        </div>
        <p className={` flex-1 `}>{children}</p>
      </div>
      {reference && (
        <a
          target="_blank"
          className="justify-self-end group-hover:opacity-100 pr-2 transition-all opacity-0"
          href={reference}
        >
          <CopyIcons className="text-mastery" />
        </a>
      )}
    </div>
  );
};
export default SkillCard;
