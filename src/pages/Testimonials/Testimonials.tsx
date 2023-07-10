import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
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
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper h-40 mt-10"
        >
          {[5, 58, 82, 58, 7, 7, 1].map((value, i) => {
            return (
              <SwiperSlide className="slides" key={i}>
                <EachReview />
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
