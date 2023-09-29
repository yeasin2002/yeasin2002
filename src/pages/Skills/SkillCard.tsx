import React from "react";
import Image from "next/image";

//  icons and types
import { BiLinkExternal as CopyIcons } from "react-icons/bi";
import { Item } from "./LoopOverSkill";
import { ChelseaFont } from "@/utils/GoogleFonts";
import Revel from "@/components/Globals/Revel";
import styles from "./SkillCardAfterEffect.module.css";

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
  return (
    <Revel transition={{ duration: 0.4, delay: index / 20 }}>
      <div
        className={`select-none group xl:py-4 xl:text-xl 2xl:py-8 2xl:text-4xl   link   text-conf font-medium   flex items-center py-2   rounded-sm  md:rounded-lg md:px-4
      shadow-md  hover:scale-105 transition-all relative overflow-hidden group  `}
        style={{
          // background: `hsla(0,0%,100%,.15)`,
          background: `rgba(71,85,105,.2)`,
          color: `hsla(0,0%,100%,.85)`,
        }}

        // style={{
        //   background: ` linear-gradient(97deg, rgba(248,249,250,1) 0%, #e9ecef 50%,   rgba(222,226,230,1) 100%)`,
        // }}
      >
        <div className="into-center w-full">
          <span
            className="absolute top-0 left-0 w-full h-full z-50 opacity-0 group-hover:opacity-60 transition-all"
            style={{
              boxShadow: ` inset 5px -5px 25px #104e81, inset -5px 0px 25px #104e81`,
            }}
          ></span>
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
      </div>
    </Revel>
  );
};
export default SkillCard;
