import React from 'react';
import Link from 'next/link';
import skillLaptopImg from '../../../public/assets/img/bg/skill-laptop.png';
import Image from 'next/image';

const SkillSection = () => {
    return (
        <div className="skill-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="skill-background-img skill-wrapper" style={{background:"url(assets/img/bg/skill.jpg)"}}>
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <div className="skill-content">
                                        <span>Keep Your Skills</span>
                                        <h3>Transform Your life <br/>
                                            Through Exclusive Education</h3>
                                        <Link href="/course" className="edu-four-btn">Tüm kurlarda ara</Link>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <div className="skill-thumb position-relative">
                                    <Image src={skillLaptopImg} style={{width:'auto', height:'auto'}} alt="img not found"/>
                                        <div className="course-price-start">
                                            Only <span className="course-price">$5</span>
                                        </div>
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

export default SkillSection;