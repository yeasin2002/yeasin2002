import { themeContext } from "@/context/ThemeProvider";
import React, { useContext } from "react";
import { IconType } from "react-icons";

export interface cardProps {
  children: React.ReactNode;
  Icon: IconType;
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
      className={`${textColor}   bg-sup text-conf font-medium capitalize hover:bg-gray-200 flex items-center py-3 transition-all rounded-sm shadow-md cursor-pointer`}
    >
      <div className="mx-4">
        <Icon />
      </div>
      <p className={` flex-1 `}>{children}</p>
    </div>
  );
};
export default SkillCard;
