import Image, { StaticImageData } from "next/image";
import React from "react";

export interface Academy extends React.HtmlHTMLAttributes<HTMLDivElement> {
  name: String;
  imageData: StaticImageData;
  AcademicYear: number;
}

const EduCard = ({ name, imageData, AcademicYear, ...props }: Academy) => {
  return (
    <div className=" gap-x-2 bg-conf/75 flex items-center p-2 my-2" {...props}>
      <Image src={imageData} alt="VGC" width={100} />
      <div>
        <p> {name} </p>
        <p>Academic Year : {AcademicYear} </p>
      </div>
    </div>
  );
};

export default EduCard;
