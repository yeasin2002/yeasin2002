import React from "react";
import Image from "next/image";

// next feature for image hover effect
// https://codepen.io/Hyperplexed/pen/wvmvqmx

//  icons and types
import { BiLinkExternal as CopyIcons } from "react-icons/bi";
import { Item } from "./LoopOverSkill";

const SkillCard = ({ title, icon, stage, reference = "" }: Item) => {
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
      className={`select-none group    bg-sup text-conf font-medium  hover:bg-gray-200 flex items-center py-2 md:py-3 transition-all rounded-sm shadow-md ${textColor} `}
    >
      <div className="into-center w-full">
        <div className="mx-4">
          <Image
            src={icon}
            alt={"Icons"}
            className="w-7 h-7 pointer-events-none"
            loading="lazy"
          />
        </div>

        <div className=" gap-x-2 flex flex-1">
          <h3>{title}</h3>
        </div>
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
