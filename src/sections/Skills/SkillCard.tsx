import Image from "next/image";
import React from "react";

//  icons and types
import Revel from "@/components/Globals/Revel";

import type { Item } from "./LoopOverSkill";

interface thisProps extends Item {
  index: number;
}

const SkillCard = ({
  title,
  icon,
  stage,
  reference = "",
  index,
}: thisProps) => {
  let boxShadowColor;
  if (stage === "advance") {
    boxShadowColor = ` inset 5px -5px 25px #E40009, inset -5px 0px 25px #E40009`;
  } else if (stage === "intermediate") {
    boxShadowColor = ` inset 5px -5px 25px #FACC15, inset -5px 0px 25px #FACC15`;
  } else {
    boxShadowColor = ` inset 5px -5px 25px #166534, inset -5px 0px 25px #166534`;
  }

  return (
    <Revel transition={{ duration: 0.4, delay: index / 20 }}>
      <div
        className={`link group group relative flex select-none   items-center   overflow-hidden rounded-sm   py-2 font-medium text-conf   shadow-md  transition-all hover:scale-105
      md:rounded-lg  md:px-4 xl:py-4 xl:text-xl    bg-[rgba(71,85,105,.2)] text-[hsla(0,0%,100%,.85)] `}
      >
        <div className="into-center w-full flex items-center gap-x-2">
          <span
            className="absolute left-0 top-0 z-50 h-full w-full opacity-0 transition-all group-hover:opacity-60"
            style={{
              boxShadow: boxShadowColor,
            }}
          />
          <div className="mx-4  ">
            <Image
              src={icon}
              alt={"Icons"}
              className="pointer-events-none h-7 w-7 xl:h-10 xl:w-10"
              loading="lazy"
            />
          </div>

          <div className=" flex flex-1 gap-x-2">
            <h3>{title}</h3>
          </div>
        </div>
      </div>
    </Revel>
  );
};
export default SkillCard;
