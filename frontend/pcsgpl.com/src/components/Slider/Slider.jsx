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

const slides = [
  {
    type: "iframe",
    content: (
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1YpkdTbV4M8Mm7IRSuYRzLoI73k7g1ns&ehbc=2E312F&noprof=1"
        width="100%"
        height="100%"
        className="w-full h-96 border-none"
        allowFullScreen
      ></iframe>
    ),
  },
  {
    type: "image",
    src: image1,
  },
  {
    type: "image",
    src: image2,
  },
  {
    type: "image",
    src: image3,
  },
];

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
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {slide.type === "image" ? (
              <img
                src={slide.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-96 object-cover"
              />
            ) : (
              slide.content
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
