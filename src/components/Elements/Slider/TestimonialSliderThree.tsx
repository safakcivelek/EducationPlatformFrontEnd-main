import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';

// Import Swiper styles
import 'swiper/css/bundle'
import testimonial_data from '@/data/testimonial-data';
import Image from 'next/image';

const TestimonialSliderThree = () => {
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
        <div className="feedback-wrapper">
            <div className="section-title mb-45">
                <h2>{`Student's`} Feedback</h2>
            </div>
            <div  className="swiper-container feedback-active">
                <div className="swiper-wrapper">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true}
                            autoplay= {{
                                delay: 2000,
                                disableOnInteraction: true
                            }}
                        >
                            {
                                testimonial_data.slice(4,7).map((item)=>(
                                    <SwiperSlide key={item.id}>
                                    <div className="feedback-content mb-30">
                                        <div className="feedback-items position-relative">
                                            <div className="feedback-header">
                                                <div className="feedback-img">
                                                    {item.image && <Image src={item.image} style={{width:'100%', height:'auto'}} alt="img not found"/>}
                                                </div>
                                                <div className="feedback-title">
                                                    <h4>{item.subTitle}</h4>
                                                    <span>{item.infoCategory}</span>
                                                </div>
                                            </div>
                                            <div className="feedback-icon">
                                                <i className="flaticon-quotes"></i>
                                            </div>
                                            <div className="feedback-body">
                                                <h3>{item.title}</h3>
                                                <p>{item.description}</p>
                                            </div>
                                            <div className="testimonial-icon">
                                            {getRating(item?.rating)}
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                ))
                            }
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSliderThree;