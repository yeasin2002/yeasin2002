import Image from "next/image";
import React, { useContext } from "react";

//  icons
import codding from "@/assets/icons/coding.svg";

export interface cardProps {
  children: React.ReactNode;
  Icon: any;
  stage: "beginner" | "intermediate" | "advance";
}
const SkillCard = ({ children, Icon, stage }: cardProps) => {
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
      className={`${textColor}   bg-sup text-conf font-medium capitalize hover:bg-gray-200 flex items-center py-2 md:py-3 transition-all rounded-sm shadow-md cursor-pointer`}
    >
      <div className="mx-4">
        <Image src={Icon} alt={"Icons"} className="w-7 h-7" />
      </div>
      <p className={` flex-1 `}>{children}</p>
    </div>
  );
};
export default SkillCard;
