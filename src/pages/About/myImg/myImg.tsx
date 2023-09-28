"use client";

import Image from "next/image";

//? my Images
import me1 from "@/assets/avatar/me/clg.jpg";
import me2 from "@/assets/avatar/me/exam.jpg";
import me3 from "@/assets/avatar/me/kawsar.jpg";
import me4 from "@/assets/avatar/me/lackpar.jpeg";
import me5 from "@/assets/avatar/me/musium.jpg";
import me6 from "@/assets/avatar/me/lastDayInClg.jpg";
import me7 from "@/assets/avatar/me/sagufta.jpg";
import ContactVia from "../ConnectVia";

const Imageka = () => {
  const randomPic = Math.floor(Math.random() * 2) + 1;

  return (
    <div className="md:order-last  flex flex-col justify-between md:justify-start w-full h-full ">
      <div className="flex items-center justify-center flex-1 w-full h-full">
        <div className=" rounded-lg  aspect-auto flex-1   mx-4 sm:mx-7 md:mx-4">
          <Image
            className="w-full h-full  rounded-lg"
            src={randomPic === 1 ? me6 : me7}
            alt="Yeasin"
            loading="lazy"
            width={300}
            height={300}
          />
        </div>
      </div>

      <ContactVia />
    </div>
  );
};

export default Imageka;
