import Image, { StaticImageData } from "next/image";
import React from "react";
import AcademyContact from "./AcademyContact";

export interface Academy extends React.HtmlHTMLAttributes<HTMLDivElement> {
  name: string;
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
      className={`  my-4 p-1 flex sm:pl-3 sm:py-2   items-center sm:gap-x-4 gap-x-1 rounded-md   text-blue-100 `}
      {...props}
      style={{
        background: `linear-gradient(to right, rgb(20, 30, 48), rgb(36, 59, 85))`,
      }}
    >
      <Image
        src={imageData}
        alt={name}
        className="w-16 h-16 xl:w-16 2xl:w-24 2xl:h-24 xl:h-16"
      />
      <div>
        <h4 className="text-xs sm:text-lg xl:text-xl font-semibold sm:font-bold">
          {name}
        </h4>
        <p className="text-xs mt-2 sm:text-sm  text-gray-400 sm:font-medium">
          {LastExam}-{AcademicYear}
        </p>
      </div>
    </div>
  );
};

export default EduCard;
