"use client";
import React, { useState, useRef, useEffect } from "react";
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
import { CategoryImageTypes } from "@/types/CategoryImage";
import { CategoryTypes } from "@/types/Category";
import { AxiosInstance } from "@/utils/axiosInstance";

interface CarouselCategoryProps {
  category_id?: number;
}

export default function CarouselCategory({
  category_id,
}: CarouselCategoryProps) {
  const swiperRef = useRef<SwiperType>();
  const [showNavBtn, setShowNavBtn] = useState(false);
  const [categoryImages, setCategoryImages] = useState<CategoryImageTypes[]>(
    [],
  );

  useEffect(() => {
    const fetchCategoryImages = async () => {
      const { data } = await AxiosInstance.get<CategoryImageTypes[]>(
        `http://localhost:5000/api/v1/products/categories/${category_id}/images`,
      );

      console.log(data);
      setCategoryImages(data);
    };

    fetchCategoryImages();
  }, []);

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
        {categoryImages.map((categoryImage, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-[300px] w-full">
              <img
                src={`http://localhost:5000/${categoryImage.category_image_url}`}
                alt="Slide 1"
                className="h-full w-full object-cover"
              />
              {/* <Image
                src={`http://localhost:5000/${categoryImage.category_image_url}`}
                alt="Slide 1"
                fill
                className="object-cover"
              /> */}
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
