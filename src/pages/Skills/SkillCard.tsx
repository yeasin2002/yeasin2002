import React from "react";
import { IconType } from "react-icons";

export interface cardProps {
  children: React.ReactNode;
  Icon: IconType;
  stage: "beginner" | "intermediate" | "advance";
}
const SkillCard = ({ children, Icon, stage }: cardProps) => {
  return (
    <div className="bg-sup text-mastery flex items-center">
      <div className="mx-4">
        <Icon />
      </div>
      <p className="flex-1">{children}</p>
    </div>
  );
};

export default SkillCard;
