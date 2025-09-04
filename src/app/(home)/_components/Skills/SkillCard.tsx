import Image from "next/image";
import React from "react";

//  icons and types
import Revel from "@/components/shared/Revel";

import type { Item } from "./LoopOverSkill";

interface thisProps extends Item {
  index: number;
}

const SkillCard = ({
  title,
  icon,

  index,
}: thisProps) => {
  return (
    <Revel transition={{ duration: 0.4, delay: index / 20 }}>
      <div
        className={`link group group relative flex select-none   items-center   overflow-hidden rounded-sm   py-2 font-medium text-conf   shadow-md  transition-all hover:scale-105 hover:shadow-lg
      md:rounded-lg  md:px-4 xl:py-4 xl:text-xl    bg-[rgba(71,85,105,.2)] text-[hsla(0,0%,100%,.85)] hover:bg-[rgba(71,85,105,.3)]`}
      >
        <div className="into-center w-full flex items-center gap-x-2">
          <span className="absolute left-0 top-0 z-50 h-full w-full opacity-0 transition-all group-hover:opacity-60" />
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
