"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Carousel() {
  const swiperRef = useRef<SwiperType>();
  const [showNavBtn, setShowNavBtn] = useState(false);

  // generate path images to dynamicaly show in SwiperSlide
  // if there are more images, then just change the length
  // the format will be [/carousel/1.jpg, /carousel/2.jpg, ...]
  // IMPORTANT: Name the image with 1.jpg, 2.jpg, ...
  const pathImages = Array.from(
    { length: 5 },
    (_, i) => `/carousel/${i + 1}.jpg`,
  );

  return (
    <div
      className="group relative mx-auto w-full max-w-[1200px]"
      onMouseEnter={() => setShowNavBtn(true)}
      onMouseLeave={() => setShowNavBtn(false)}
    >
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className={`absolute -left-6 top-1/2 z-10 -translate-y-1/2 transform rounded-full border border-slate-300 bg-white px-4 py-2 text-3xl transition-all duration-300 hover:scale-110 ${
          showNavBtn ? "opacity-100" : "opacity-0"
        }`}
      >
        &lt;
      </button>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{ delay: 3000 }}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        onReachEnd={() => {}}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="rounded-xl"
      >
        {pathImages.map((pathImage, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-[300px] w-full">
              <Image
                src={pathImage}
                alt="Slide 1"
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className={`absolute -right-6 top-1/2 z-10 -translate-y-1/2 transform rounded-full border border-slate-300 bg-white px-4 py-2 text-3xl transition-all duration-300 hover:scale-110 ${
          showNavBtn ? "opacity-100" : "opacity-0"
        }`}
      >
        &gt;
      </button>
    </div>
  );
}
