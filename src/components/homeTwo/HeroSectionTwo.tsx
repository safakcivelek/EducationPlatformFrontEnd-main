import React from 'react';
import shapeImgOne from "../../../public/assets/img/shape/shape-02.png";
import shapeImgTwo from "../../../public/assets/img/shape/shape-03.png";
import shapeImgThere from "../../../public/assets/img/shape/shape-01.png";
import shapeImgFour from "../../../public/assets/img/shape/shape-10.png";
import shapeImgFive from "../../../public/assets/img/shape/shape-04.png";
import shapeImgSix from "../../../public/assets/img/shape/shape-09.png";
import shapeImgSeven from "../../../public/assets/img/shape/shape-8.png";
import shapeImgEight from "../../../public/assets/img/slider/hero-01.png";
import shapeImgNine from "../../../public/assets/img/slider/hero-02.png";
import sliderCardImgOne from "../../../public/assets/img/shape/slider-card-1.png";
import sliderCardImgTwo from "../../../public/assets/img/shape/slider-card-2.png";
import sliderCardImgThere from "../../../public/assets/img/shape/slider-card-3.png";
import sliderCardImgFour from "../../../public/assets/img/shape/slider-card-4.png";
import Image from 'next/image';

const HeroSectionTwo = () => {
    return (
        <div className="hero-area hero-height d-flex align-items-center position-relative">
             <Image className="hero-shape-5" src={shapeImgOne} style={{width:'auto', height:'auto'}} alt="shape"/>
             <Image className="hero-shape-1" src={shapeImgTwo} style={{width:'auto', height:'auto'}} alt="shape"/>
             <Image className="hero-shape-6" src={shapeImgThere} style={{width:'auto', height:'auto'}} alt="shape"/>
             <Image className="hero-shape-7" src={shapeImgFour} style={{width:'auto', height:'auto'}} alt="shape"/>
            <div className="hero-shap-5 d-none d-xxl-block">
                <div className="hero-card">
                <Image src={sliderCardImgOne} style={{width:'auto', height:'auto'}} alt="img not found"/>
                <Image src={sliderCardImgTwo} style={{width:'auto', height:'auto'}} alt="img not found"/>
                <Image src={sliderCardImgThere} style={{width:'auto', height:'auto'}} alt="img not found"/>
                <Image src={sliderCardImgFour} style={{width:'auto', height:'auto'}} alt="img not found"/>
                    <span><i className="far fa-plus"></i></span>
                </div>
                <h5>More than <span>21,500+</span> students
                    enrolled around the world
                </h5>
            </div>
            <div className="container">
                <div className="hero-2-content-wrpapper position-relative">
                    <div className="hero-shape-3 d-none d-xl-block">
                        <Image className="" src={shapeImgFive} style={{width:'auto', height:'auto'}} alt="img not found"/>
                        <h5 className="slider-shap-text">Top Rated
                            Instructors</h5>
                    </div>
                    <div className="hero-shape-2 d-none d-xl-block">
                        <Image src={shapeImgSix} style={{width:'auto', height:'auto'}} alt="shape"/>
                    </div>
                    <div className="hero-shape-4 d-none d-lg-block">
                    <Image src={shapeImgSeven} style={{width:'auto', height:'auto'}} alt="shape"/>
                    </div>
                    <div className="hero-thumb-01 d-none d-xl-block">
                    <Image src={shapeImgEight} style={{width:'auto', height:'auto'}} alt="shape"/>
                    </div>
                    <div className="hero-thumb-02 d-none d-lg-block">
                    <Image src={shapeImgNine} style={{width:'auto', height:'auto'}} alt="shape"/>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-8 col-md-10">
                            <div className="slider-content-wrapper">
                                <div className="hero-tittle-info text-center mb-45">
                                    <h2>Build Your Own Online<br/>
                                        Platform <span className="down-mark-line-2">Eduman</span></h2>
                                </div>
                                <div className="slider-search ">
                                    <form action="#">
                                        <div className="slider-search-icon position-relative">
                                            <input type="text" placeholder="Search courses..."/>
                                            <button type="submit"><i className="far fa-search"></i></button>
                                        </div>
                                    </form>
                                </div>
                                <div className="slider-course-content text-center">
                                    <ul>
                                        <li><i className="fas fa-check-circle"></i><span>Free for physically handcraft
                                            </span></li>
                                        <li><i className="fas fa-check-circle"></i><span>Course certificate</span></li>
                                        <li><i className="fas fa-check-circle"></i><span>Easy to enroll courses</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSectionTwo;