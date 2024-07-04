"use client";

import { LayoutGrid } from "@/components/aceternity";
import React, { useState } from "react";

//? my Images
import me2 from "@/assets/avatar/me/exam.jpg";
import me4 from "@/assets/avatar/me/lastDayInClg.jpg";
import me3 from "@/assets/avatar/me/pp.png";
import me1 from "@/assets/avatar/me/sagufta.jpg";
import { cn } from "@/utils";
import Image, { type StaticImageData } from "next/image";

export function LayoutGridCard() {
  return (
    <div className="w-full h-screen py-20">
      <LayoutGrid cards={cards} />
      <div className="relative hidden w-full md:block max-h-40 ">
        <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
        <div className="absolute top-0 w-3/4 h-px inset-x-20 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
        <div className="absolute top-0 w-1/4 h-px inset-x-60 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
        <div className="absolute inset-0 h-full w-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
      </div>
    </div>
  );
}

interface BlurryImgProps {
  className?: string;
  imgSrc: StaticImageData;
}

const BlurryImg = (Props: BlurryImgProps) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Image
      {...Props}
      src={Props.imgSrc}
      height="500"
      width="500"
      onLoad={() => setLoaded(true)}
      aria-label="Image of  yeasin2002"
      className={cn(
        " inset-0 h-full w-full  object-cover object-top transition duration-200  ",
        loaded ? "blur-none" : "blur-md",
        Props.className
      )}
      alt="thumbnail"
    />
  );
};

const cards = [
  {
    id: 1,
    className: "md:col-span-2",
    thumbnail: me1,
  },
  {
    id: 2,
    className: "col-span-1",
    thumbnail: me2,
  },
  {
    id: 3,
    className: "col-span-1",
    thumbnail: me3,
  },
  {
    id: 4,
    className: "md:col-span-2",
    thumbnail: me4,
  },
];
