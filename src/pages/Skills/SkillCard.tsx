import React from "react";
import Image from "next/image";

//  icons
import { BiLinkExternal as CopyIcons } from "react-icons/bi";

export interface cardProps {
  children: React.ReactNode;
  Icon: any;
  stage: "beginner" | "intermediate" | "advance";
  link?: string;
}
const SkillCard = ({ children, Icon, stage, link = "" }: cardProps) => {
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
      className={`${textColor}  group  bg-sup text-conf font-medium capitalize hover:bg-gray-200 flex items-center py-2 md:py-3 transition-all rounded-sm shadow-md cursor-pointer`}
    >
      <div className="into-center w-full">
        <div className="mx-4">
          <Image src={Icon} alt={"Icons"} className="w-7 h-7" />
        </div>
        <p className={` flex-1 `}>{children}</p>
      </div>
      <a
        target="_blank"
        className="justify-self-end group-hover:opacity-100 pr-2 transition-all opacity-0"
        href={link}
      >
        <CopyIcons className="text-mastery" />
      </a>
    </div>
  );
};
export default SkillCard;
