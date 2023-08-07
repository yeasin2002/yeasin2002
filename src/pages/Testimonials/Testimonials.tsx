"use client";

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
import DummyFeedback from "../../data/DummyFeedback";
import FeedbackCard from "./Feedback";

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
          slidesPerView={2}
          centeredSlides={false}
          slidesPerGroupSkip={2}
          spaceBetween={30}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          // breakpoints={{
          //   769: {
          //     slidesPerView: 2,
          //     slidesPerGroup: 2,
          //   },
          // }}
          scrollbar={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper"
        >
          {DummyFeedback.map((value, i) => {
            return (
              <SwiperSlide key={value.id}>
                <FeedbackCard
                  content={value.content}
                  img={value.img}
                  name={value.name}
                  title={value.title}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
