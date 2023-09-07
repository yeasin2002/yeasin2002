import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const FramerSlider = () => {


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
          {/* {apiData.results &&
            apiData.results.map((data) => {
              return (
                <motion.div>
                  <MovieData
                    title={data.title}
                    voteAverage={data.vote_average}
                    voteCount={data.vote_count}
                    poster={data.poster_path}
                    MovieId={data.id}
                  />
                </motion.div>
              );
            })} */}
        </motion.div>
      </motion.div>
    </div>
  );
};
export default FramerSlider;
