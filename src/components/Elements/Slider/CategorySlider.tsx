"use client"
import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import shapeImage from '../../../../public/assets/img/shape/categorey-shap-02.png';
import shapeImageTwo from '../../../../public/assets/img/shape/categorey-shap-01.png';

// Import Swiper styles
import 'swiper/css/bundle';
import Link from 'next/link';
import categories_data from '@/data/categories-data';
import Image from 'next/image';

const CategorySlider = () => {
    return (
        <div className="categories-area grey-2 pt-110 pb-90 position-relative">
            <div className="category-shap-02">
                <Image src={shapeImage} style={{width:'auto', height:'auto'}} alt="img not found"/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mb-20">
                        <div className="section-title mb-30">
                            <h2>Top <span className="down-mark-line-2">Categories</span></h2>
                        </div>
                    </div>
                    <div>
                        <div className="category-main-wrapper position-relative">
                            <div className="category-shap-01">
                                <Image src={shapeImageTwo} style={{width:'auto', height:'auto'}} alt="img not found"/>
                            </div>
                            <div>
                                <div className="category-slide-wrapper position-relative">
                                    <div className="category-active">
                                        <div>
                                            <Swiper
                                                modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                                                spaceBetween={30}
                                                loop={true}
                                                breakpoints={{
                                                    320: {
                                                        slidesPerView: 1
                                                    },
                                                    480: {
                                                        slidesPerView: 1
                                                    },
                                                    640: {
                                                        slidesPerView: 2
                                                    },
                                                    991: {
                                                        slidesPerView: 3
                                                    },
                                                    1200: {
                                                        slidesPerView: 3
                                                    },
                                                    1400: {
                                                        slidesPerView: 5
                                                    }
                                                }}
                                                autoplay= {{
                                                    delay: 3000,
                                                    disableOnInteraction: true
                                                }}
                                                navigation={{
                                                   
                                                    nextEl: '.category-button-next',
                                                    prevEl: '.category-button-prev',
                                            }}
                                            >
                                                {
                                                    categories_data.slice(9,15).map((item)=>(
                                                        <SwiperSlide key={item.id}>
                                                        <Link href="/course">
                                                        <div className="categories-wrapper text-center mb-30">
                                                            <div className="categiories-thumb">
                                                               {item.icon && <item.icon/>}
                                                            </div>
                                                            <div className="categories-content">
                                                                <h4>{item.title}</h4>
                                                                <p>{item.description}</p>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    </SwiperSlide>
                                                    ))
                                                }
                                            </Swiper>
                                        </div>
                                    </div>

                                    <div className="category-nav">
                                        <div className="category-button-prev"><i className="far fa-long-arrow-left"></i></div>
                                        <div className="category-button-next"><i className="far fa-long-arrow-right"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategorySlider;