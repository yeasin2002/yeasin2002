import Image, { StaticImageData } from "next/image";
import React from "react";
import AcademyContact from "./AcademyContact";

export interface Academy extends React.HtmlHTMLAttributes<HTMLDivElement> {
  name: String;
  imageData: StaticImageData;
  AcademicYear: number;
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
    <div
      className={`gap-x-2 bg-conf/75 flex items-center  justify-between   p-2 my-2 focus:bg-slate-700 bg-slate-800 placeholder:text-gray-300 text-blue-100 `}
      {...props}
    >
      <div className="gap-x-2 flex items-center">
        <Image src={imageData} alt="VGC" loading="lazy" className=" w-20" />
        <div className=" flex-1">
          <p className="sm:text-lg text-xs"> {name} </p>
          <p>
            {LastExam}-{AcademicYear}
          </p>
        </div>
        <AcademyContact className=" justify-end" />
      </div>
    </div>
  );
};

export default EduCard;
