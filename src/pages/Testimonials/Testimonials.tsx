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

      {/* others Reviews */}
      <div>
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          spaceBetween={30}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            1000: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 30,
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
