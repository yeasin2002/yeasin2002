import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { projectTypes } from "@/data/Projects/projectData";

const SliderCard = ({ name, ProjectImage, id }: projectTypes) => {
  const [SliderWidth, setSliderWidth] = useState(0);
  const SliderRef = useRef();

  useEffect(() => {
    setSliderWidth(
      SliderRef?.current?.scrollWidth - SliderRef?.current?.offsetWidth
    );
  }, []);

  return (
    <div>
      <motion.div ref={SliderRef} className=" p-2 overflow-hidden">
        <motion.div
          drag="x"
          dragConstraints={{
            right: 0,
            left: -SliderWidth,
          }}
          className="gap-x-4 md:gap-x-2 flex"
        >
          <div className=" h-72 inline-block w-full">
            <Image src={ProjectImage} alt={name} className="w-full h-full" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SliderCard;
