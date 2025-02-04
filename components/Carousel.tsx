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
        <SwiperSlide>
          <div className="relative h-[300px] w-full">
            <Image
              src="/carousel/1.jpg" // Image should be inside "public/carousel/1.jpg"
              alt="Slide 1"
              fill
              className="object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[300px] w-full">
            <Image
              src="/carousel/2.jpg"
              alt="Slide 2"
              fill
              className="object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[300px] w-full">
            <Image
              src="/carousel/3.jpg"
              alt="Slide 3"
              fill
              className="object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[300px] w-full">
            <Image
              src="/carousel/4.jpg"
              alt="Slide 4"
              fill
              className="object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[300px] w-full">
            <Image
              src="/carousel/5.jpg"
              alt="Slide 5"
              fill
              className="object-cover"
            />
          </div>
        </SwiperSlide>
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
