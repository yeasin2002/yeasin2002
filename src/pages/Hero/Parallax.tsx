"use client";

import React, { useState } from "react";

//  assets
import cube from "@/assets//3d/RoundCube-Orange-Glossy.svg";
import Image from "next/image";

type Props = {};

const Parallax = (props: Props) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    const spanRect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - spanRect.left;
    const mouseY = e.clientY - spanRect.top;
    setPosition({ x: mouseX, y: mouseY });
  };

  const parallaxStyle = {
    transform: `translate(${position.x / 10}px, ${position.y / 10}px)`, // Adjust the parallax effect as needed
  };
  return (
    <>
      <div className="parallax-wrap ">
        <span className="" onMouseMove={handleMouseMove}>
          <Image
            src={cube}
            alt="cube "
            className="absolute bottom-0 left-0 w-8"
            style={parallaxStyle}
          />
        </span>
      </div>
    </>
  );
};

export default Parallax;
