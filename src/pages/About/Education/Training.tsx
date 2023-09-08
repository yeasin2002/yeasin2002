import React from "react";

//  Assets
import lws from "@/assets/avatar/Academy/lws.svg";
import Image from "next/image";

const Training = () => {
  return (
    <div className=" bg-conf/75 focus:bg-slate-700 bg-slate-800 h-5/6 mt-3">
      <div className=" md:flex-row md:items-center gap-y-4 flex flex-col items-start justify-between w-full h-full">
        <div className=" flex items-center">
          <Image src={lws} alt="VGC" className="mr-2" />
          <div>
            <h4>Think in a redux way</h4>
            <p> learn with sumit </p>
          </div>
        </div>
        <div>
          <button className="px-2 py-1 border border-red-700 rounded-lg">
            certificates
          </button>
        </div>
      </div>
    </div>
  );
};
export default Training;
