import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

import EachReview from "./EachReview";

const Testimonials = () => {
  return (
    <section className="eachSections">
      <h2 className="title">Testimonials</h2>

      <div>
        <div className="into-center justify-end">
          <span className=" bg-amber-500 p-3 rounded-full">
            <AiFillPlusCircle className="text-mastery" />
          </span>
        </div>
      </div>

      {/* others Reviews */}
      <div>
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={2}
          spaceBetween={30}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            769: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
          }}
          scrollbar={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper"
        >
          {[5, 58, 82, 58, 7, 7, 1].map((value, i) => {
            return (
              <SwiperSlide key={value}>
                <EachReview />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
