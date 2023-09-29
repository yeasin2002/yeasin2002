import { projectTypes } from "@/data/Projects/projectData";
import { GupterFont, OswaldFont, MooliFont } from "@/utils/GoogleFonts";
import Image from "next/image";
import React from "react";
import { BsGithub, BsLink45Deg } from "react-icons/bs";

interface nextProjectCardProps {
  isTranslate: boolean;
}

const NextProjectCard = ({
  id,
  name,
  ProjectImage,
  gitHubLink,
  liveLink,
  description,
  tag,
  isTranslate,
}: projectTypes & nextProjectCardProps) => {
  return (
    <div
      className={`w-full h-full  bg-[#080808] rounded-xl  p-4  
    ${isTranslate && id === 1 && "lg:-translate-y-40 2xl:-translate-y-72"}
    `}
    >
      <div className="h-72 2xl:h-96">
        <Image
          className="w-full  rounded-lg h-full  "
          src={ProjectImage}
          alt={name}
        />
      </div>
      <div>
        <div className="flex items-center justify-between my-5 ">
          <h3
            className={`text-xl font-bold text-blue-100   2xl:text-6xl 2xl:py-2 ${OswaldFont.className}`}
          >
            {name}
          </h3>
          <div className="flex items-center justify-center gap-x-2 2xl:gap-x-5">
            <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
              <BsGithub className="2xl:text-3xl" />
            </a>
            <a
              href={liveLink}
              target="_blank"
              rel="noreferrer"
              className={`border border-white rounded-full p-1  `}
            >
              <BsLink45Deg className="2xl:text-3xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex gap-x-3 2xl:py-2 ">
        {tag?.map((tech) => {
          return (
            <p
              className={`2xl:text-2xl text-gray-300 ${GupterFont.className} `}
              key={tech}
            >
              {tech}
            </p>
          );
        })}
      </div>

      <hr className="mt-2 mb-5" />

      <div
        className={`mt-3 text-gray-400 2xl:py-4 2xl:text-2xl ${MooliFont.className}`}
      >
        {description}
      </div>
    </div>
  );
};

export default NextProjectCard;
