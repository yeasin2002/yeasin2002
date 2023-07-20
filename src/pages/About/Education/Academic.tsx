import React from "react";
import Image from "next/image";

import vgc from "@/assets/avatar/Academy/VGC.jpg";
import bgss from "@/assets/avatar/Academy/vgc-top-view.jpg";

import EduCard from "./EduCard";

const Academic = () => {
  return (
    <div>
      <EduCard
        name={"Vashantek Govt. Collage"}
        imageData={vgc}
        AcademicYear={2021}
      />
      <EduCard
        name={"Bhashantek Govt. Secondary School"}
        imageData={bgss}
        AcademicYear={2023}
      />
    </div>
  );
};

export default Academic;
