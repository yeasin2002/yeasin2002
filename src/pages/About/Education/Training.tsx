import React from "react";
import EduCard from "./EduCard";

//  Assets
import lws from "@/assets/avatar/Academy/lws.svg";
import Image from "next/image";
import useGEneratedColor from "@/hooks/useGeneratedColor";

const Training = () => {
  const { theStyles } = useGEneratedColor({
    GreenishColorValue: {
      styles:
        "focus:bg-emerald-700 bg-emerald-800 placeholder:text-gray-300 text-sup",
    },
    MidnightBlueColorValue: {
      styles:
        "focus:bg-slate-700 bg-slate-800 placeholder:text-gray-300 text-paste",
    },
  });

  return (
    <div
      className={` gap-x-2 bg-conf/75 flex items-center justify-between p-2 my-2 ${theStyles}`}
    >
      <div className=" flex items-center">
        <Image src={lws} alt="VGC" width={100} className="mr-2" />
        <div>
          <h4>Think in a redux way</h4>
          <p> learn with sumit </p>
        </div>
      </div>
      <div>
        <button className="border-paste p-2 border rounded-lg">
          Download
          <br />
          Certificates
        </button>
      </div>
    </div>
  );
};

export default Training;
