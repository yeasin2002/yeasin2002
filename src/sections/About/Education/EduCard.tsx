import Revel from "@/components/Globals/Revel";
import { MeriendaFont, RozhaFont } from "@/utils/GoogleFonts";
import Image, { StaticImageData } from "next/image";
import React from "react";

export interface Academy extends React.HtmlHTMLAttributes<HTMLDivElement> {
  name: string;
  imageData: StaticImageData;
  AcademicYear: string | number;
  LastExam: "HSC" | "SSC";
}

const EduCard = ({
  name,
  imageData,
  AcademicYear,
  LastExam,
  ...props
}: Academy) => {
  return (
    <Revel
      className={` my-4 flex items-center  gap-x-1 rounded-md bg-gradient-to-r from-shine-0 to-shine-100   p-1 text-blue-100 sm:gap-x-4 sm:py-2   sm:pl-3`}
      {...props}
    >
      <Image
        src={imageData}
        alt={name}
        className="h-16 w-16 xl:h-16 xl:w-16 2xl:size-20 "
      />
      <div>
        <h4
          className={`text-xs font-semibold sm:text-lg sm:font-bold xl:text-2xl  ${RozhaFont.className}`}
        >
          {name}
        </h4>
        <p
          className={`mt-2 text-xs text-gray-400  sm:text-sm sm:font-medium ${MeriendaFont.className}`}
        >
          {LastExam} {AcademicYear}
        </p>
      </div>
    </Revel>
  );
};

export default EduCard;
