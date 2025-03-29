import type { projectTypes } from "@/data/projectData";

import { Github } from "lucide-react";
import Image from "next/image";
import React from "react";
import { BsLink45Deg } from "react-icons/bs";

interface nextProjectCardProps {
  isTranslate: boolean;
  id: number;
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
  notes,
}: projectTypes & nextProjectCardProps) => {
  return (
    <div
      className={`h-full w-full  rounded-xl bg-[#080808]  p-4  
    ${isTranslate && id === 1 && "lg:-translate-y-40 2xl:-translate-y-72"}
    `}
    >
      <div className="h-72 2xl:h-72">
        <Image
          className="aspect-video h-full w-full rounded-lg  object-cover "
          src={ProjectImage}
          alt={name}
        />
      </div>
      <div>
        <div className="my-5 flex items-center justify-between ">
          <h3
            className={`text-xl font-bold text-blue-100   2xl:py-2 2xl:text-3xl `}
          >
            {name}
            {notes && <span>- {notes}</span>}
          </h3>
          <div className="flex items-center justify-center gap-x-2 2xl:gap-x-5">
            {gitHubLink && (
              <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
                <Github />
              </a>
            )}
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noreferrer"
                className={`rounded-full border border-white p-1  `}
              >
                <BsLink45Deg className="2xl:text-3xl" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-x-3 2xl:py-2 ">
        {tag?.map((tech, i) => {
          return (
            <p className={`text-gray-300 `} key={crypto.randomUUID()}>
              #{tech}
            </p>
          );
        })}
      </div>

      <hr className="mb-5 mt-2" />

      <div className={`mt-3 text-gray-400 2xl:py-4 2xl:text-xl `}>
        {description}
      </div>
    </div>
  );
};

export default NextProjectCard;
