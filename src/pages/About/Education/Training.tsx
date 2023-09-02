import React from "react";

//  Assets
import lws from "@/assets/avatar/Academy/lws.svg";
import Image from "next/image";

const Training = () => {
  return (
    <div
      className={` gap-x-2 bg-conf/75 flex   flex-col p-2 my-2 focus:bg-slate-700 bg-slate-800 placeholder:text-gray-300 h-full sm:h-3/6 `}
    >
      <div className=" flex items-center">
        <Image src={lws} alt="VGC" className="mr-2" />
        <div>
          <h4>Think in a redux way</h4>
          <p> learn with sumit </p>
        </div>
      </div>
    </div>
  );
};

export default Training;
