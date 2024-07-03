"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css/bundle";
import testimonial_data from "@/data/testimonial-data";
import Image from "next/image";

const TestimonialSlider = () => {

  //for rating handle
  const getRating = (rating: any) => {
    let empty_rating_count = 5 - rating;
    let ratings = [];
    for (let i = 0; i < rating; i++) {
        ratings.push(<i className="fas fa-star" key={`l-${i}`}></i>)
    }
    for (let i = 0; i < empty_rating_count; i++) {
        ratings.push(<i className="fal fa-star" key={`p-${i}`}></i>)
    }
    return ratings;
}
//for rating handle
  return (
    <div className="testimonial-area pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-title text-center mb-55">
              <h2>
                What Students
                <br />
                Think and Say About
                <span className="down-mark-line">Eduman</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="testimonial-active">
          <Swiper
            modules={[Pagination, A11y, Autoplay]}
            spaceBetween={30}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1 },
              480: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              991: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
              1400: { slidesPerView: 3 },
            }}
            pagination={{
              clickable: true,
              el: ".testimonial-pagination",
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
          >
            {testimonial_data.slice(0,4).map((item) => (
              <SwiperSlide key={item.id}>
                <div className="testimonial-items position-relative">
                  <div className="testimonial-header">
                    <div className="testimonial-img">
                      {item.image && <Image src={item.image} style={{width:'auto', height:'auto'}} alt="img not found"/>}
                    </div>
                    <div className="testimonial-title">
                      <h4>{item.subTitle}</h4>
                      <span>{item.infoCategory}</span>
                    </div>
                  </div>
                  <div className="testimoni-quotes">
                    <Image
                      src={item.iconImg}
                      style={{width:'50px', height:'50px'}}
                      alt="img not found"
                    />
                  </div>
                  <div className="testimonial-body">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <div className="testimonial-icon">
                  {getRating(item?.rating)}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="testimonial-pagination text-center"></div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
