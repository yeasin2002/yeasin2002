import React, { useState } from "react";
import Image from "next/image";

//  icons and types
import { BiLinkExternal as CopyIcons } from "react-icons/bi";
import { Item } from "./LoopOverSkill";
import { ChelseaFont } from "@/utils/GoogleFonts";

const SkillCard = ({ title, icon, stage, reference = "" }: Item) => {
  let textColor;
  // if (stage === "beginner") {
  //   textColor = "shadow-amethyst";
  // } else if (stage === "intermediate") {
  //   textColor = "shadow-fog";
  // } else {
  //   textColor = "shadow-teal-700";
  // }

  return (
    <div
      className={`select-none group xl:py-4 xl:text-xl 2xl:py-8 2xl:text-4xl   link   text-conf font-medium  hover:bg-gray-200 flex items-center py-2  transition-all rounded-sm  md:rounded-lg md:px-4
      shadow-md ${textColor} `}
      style={{
        background: ` linear-gradient(97deg, rgba(248,249,250,1) 0%, #e9ecef 50%,   rgba(222,226,230,1) 100%)`,
      }}
    >
      <div className="into-center w-full">
        <div className="mx-4">
          <Image
            src={icon}
            alt={"Icons"}
            className="w-7 h-7 xl:w-10 xl:h-10 pointer-events-none"
            loading="lazy"
          />
        </div>

        <div className=" gap-x-2 flex flex-1">
          <h3 className={ChelseaFont.className}>{title}</h3>
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
