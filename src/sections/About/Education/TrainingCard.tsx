import Revel from "@/components/Globals/Revel";
import { MeriendaFont, RozhaFont } from "@/utils/GoogleFonts";
import Image, { StaticImageData } from "next/image";
import React from "react";

export interface Academy extends React.HtmlHTMLAttributes<HTMLDivElement> {
  courseName: string;
  courseInstitute: string;
  courseInstituteImg?: StaticImageData;
  imageData: StaticImageData;
  desc?: string;
  haveCertificate?: boolean;
  certificateUrl?: string;
}

const TrainingCard = ({
  courseName,
  courseInstitute,
  courseInstituteImg,
  imageData,
  desc,
  haveCertificate,
  certificateUrl,
  ...props
}: Academy) => {
  return (
    <Revel
      className={` my-4 flex items-center  justify-between gap-x-1  rounded-md bg-gradient-to-r   from-shine-0 to-shine-100 p-1 text-blue-100   sm:gap-x-4 sm:py-2 sm:pl-3`}
      {...props}
    >
      <div className="flex items-center gap-x-2">
        {" "}
        <Image
          src={imageData}
          alt={courseName}
          className="h-16 w-16 xl:h-16 xl:w-16 2xl:h-24 2xl:w-24"
        />
        <div>
          <h4
            className={`text-xs font-semibold sm:text-lg sm:font-bold xl:text-2xl 2xl:text-3xl ${RozhaFont.className}`}
          >
            {courseName}
            <span className="mx-3  text-xs font-normal ">{desc}</span>
          </h4>
          <div className="mt-2 flex items-center gap-x-1">
            {courseInstituteImg && (
              <Image
                src={courseInstituteImg}
                alt="courseInstituters Image"
                width={200}
                height={200}
                className="size-4"
              />
            )}
            <p
              className={`text-xs  text-gray-400  sm:text-sm sm:font-medium ${MeriendaFont.className}`}
            >
              {courseInstitute}
            </p>
          </div>
        </div>
      </div>
      {haveCertificate && (
        <a
          href={certificateUrl}
          download={courseName}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-2 me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
        >
          Certificate
        </a>
      )}
    </Revel>
  );
};

export default TrainingCard;
