// components/ImageSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import image1 from "../../assets/images/collab4.jpg";
import image2 from "../../assets/images/collab1.jpg";
import image3 from "../../assets/images/collab.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [image1, image2, image3];

const Slider = () => {
  return (
    <div className="max-w-[97%] mx-auto py-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="rounded-2xl overflow-hidden"
      >
        {slides.map((url, index) => (
          <SwiperSlide key={index}>
            <img
              src={url}
              alt={`Slide ${index + 1}`}
              className="w-full h-96 object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
