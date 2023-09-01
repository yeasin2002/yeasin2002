import useGEneratedColor from "@/hooks/useGeneratedColor";
import Image, { StaticImageData } from "next/image";
import React from "react";
import AcademyContact from "./AcademyContact";

export interface Academy extends React.HtmlHTMLAttributes<HTMLDivElement> {
  name: String;
  imageData: StaticImageData;
  AcademicYear: number;
}

const EduCard = ({ name, imageData, AcademicYear, ...props }: Academy) => {
  const { theStyles } = useGEneratedColor({
    GreenishColorValue: {
      styles:
        "focus:bg-emerald-700 bg-emerald-800 placeholder:text-gray-300 text-sup",
    },
    MidnightBlueColorValue: {
      styles:
        "focus:bg-slate-700 bg-slate-800 placeholder:text-gray-300 text-blue-100  ",
    },
  });
  return (
    <div
      className={`gap-x-2 bg-conf/75 flex items-center  justify-between   p-2 my-2 ${theStyles}`}
      {...props}
    >
      <div className="flex items-center">
        <Image src={imageData} alt="VGC" width={100} />
        <div>
          <p> {name} </p>
          <p>Academic Year : {AcademicYear} </p>
        </div>
      </div>

      <AcademyContact />
    </div>
  );
};

export default EduCard;
