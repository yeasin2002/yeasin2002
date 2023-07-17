import React from "react";

//  assets
import cube from "@/assets//3d/RoundCube-Orange-Glossy.svg";
import Image from "next/image";

const Parallax = () => {
  return (
    <>
      <div className="parallax-wrap ">
        <span className="">
          <Image
            id="box"
            src={cube}
            alt="cube "
            className="left-10 absolute bottom-0 w-8"
          />
        </span>
      </div>
    </>
  );
};

export default Parallax;
