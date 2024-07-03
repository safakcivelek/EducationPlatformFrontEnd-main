"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css/bundle";
import Brand_data from "@/data/brand-data";
import Image from "next/image";
const BrandSlider = () => {
  return (
    <div className="brand-area theme-bg pt-90 pb-120">
      <div className="container">
        <div className="bd-brands">
            <Swiper
              modules={[A11y, Autoplay]}
              spaceBetween={30}
              loop={true}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                480: {
                  slidesPerView: 2,
                },
                640: {
                  slidesPerView: 3,
                },
                991: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 5,
                },
                1400: {
                  slidesPerView: 6,
                },
              }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: true,
              }}
            >
             {Brand_data.slice(0, 7).map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="singel-brand">
                    {item?.image && <Image src={item?.image} style={{ width: "140px", height: "105px" }} alt="img not found" />}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
  );
};

export default BrandSlider;
