import { themeContext } from "@/context/ThemeProvider";
import React, { useContext } from "react";
import { IconType } from "react-icons";

export interface cardProps {
  children: React.ReactNode;
  Icon: IconType;
  stage: "beginner" | "intermediate" | "advance";
}
const SkillCard = ({ children, Icon, stage }: cardProps) => {
  // let textColor;
  // if (stage === "beginner") {
  //   textColor = "text-amethyst";
  // } else if (stage === "intermediate") {
  //   textColor = "text-mastery";
  // } else {
  //   textColor = "text-conf";
  // }
  return (
    <div className="bg-sup hover:bg-gray-200 text-mastery flex items-center py-3 transition-all rounded-sm cursor-pointer">
      <div className="mx-4">
        <Icon />
      </div>
      <p className={` flex-1 `}>{children}</p>
    </div>
  );
};

export default SkillCard;
