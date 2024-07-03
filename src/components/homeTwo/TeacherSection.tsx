import React from 'react';
import Link from 'next/link';
import TeacherImage from '../../../public/assets/img/teacher/teacher.png';
import ShapeImage from '../../../public/assets/img/teacher/teacher-shape-01.png';
import ShapeImageTwo from '../../../public/assets/img/teacher/teacher-shape-02.png';
import ShapeImageThere from '../../../public/assets/img/teacher/teacher-shape-03.png';
import ShapeImageFour from '../../../public/assets/img/teacher/teacher-shape-03.png';

import Image from 'next/image';

const TeacherSection = () => {
    return (
        <section className="teacher-area position-relative pt-120 fix">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-xxl-4 col-xl-5 col-lg-5">
                        <div className="teacher-img position-relative">
                        <Image className="teacher-main-img" src={TeacherImage} style={{width:'auto', height:'auto'}} alt="img not found"/>
                        <Image className="teacher-shape" src={ShapeImage} style={{width:'auto', height:'auto'}} alt="img not found"/>
                        <Image className="teacher-shape-02" src={ShapeImageTwo} style={{width:'auto', height:'auto'}} alt="img not found"/>
                        <Image className="teacher-shape-03" src={ShapeImageThere} style={{width:'auto', height:'auto'}} alt="img not found"/>
                        <Image className="teacher-shape-04" src={ShapeImageFour} style={{width:'auto', height:'auto'}} alt="img not found"/>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-5 col-lg-5">
                        <div className="teacher-content mr-20">
                            <div className="section-title mb-30">
                                <h2>Become an Instructor
                                    And <span className="down-mark-line-2">Teach</span> Online</h2>
                            </div>
                            <p>Helping employees gain skills and providing career development often take a back seat to
                                business priorities but workplace.</p>
                            <Link href="/instructor" className="edu-btn btn-transparent mt-25">Join us now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeacherSection;