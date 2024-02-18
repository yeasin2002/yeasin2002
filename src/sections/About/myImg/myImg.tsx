"use client";

import Image from "next/image";
import ContactVia from "../ConnectVia";

//? my Images
import me9 from "@/assets/avatar/me/KIY.jpeg";
import me1 from "@/assets/avatar/me/clg.jpg";
import me8 from "@/assets/avatar/me/dev yeasin.jpeg";
import me2 from "@/assets/avatar/me/exam.jpg";
import me3 from "@/assets/avatar/me/kawsar.jpg";
import me4 from "@/assets/avatar/me/lackpar.jpeg";
import me6 from "@/assets/avatar/me/lastDayInClg.jpg";
import me5 from "@/assets/avatar/me/musium.jpg";
import me7 from "@/assets/avatar/me/sagufta.jpg";

import profilePic from "@/assets/avatar/me/rounded.png";

const Imageka = () => {
  return (
    <div className="flex  h-full w-full flex-col justify-between md:order-last md:justify-start ">
      <div className="flex h-full w-full flex-1 items-center justify-center">
        <div className=" mx-4  flex aspect-auto   w-full flex-1 flex-col items-center  overflow-hidden rounded-lg sm:mx-7 md:mx-4 ">
          <Image
            className="size-full md:size-1/2"
            src={profilePic}
            alt="Yeasin"
            loading="lazy"
            width={1000}
            height={1000}
          />
        </div>
      </div>

      <ContactVia />
    </div>
  );
};

export default Imageka;
