import React from 'react';
import Link from 'next/link';
import AcadenicShapeImg from '../../../public/assets/img/shape/acadenic-shape-2.png';
import Image from 'next/image';
import courses_data from '@/data/courses-data';

const AcademicCourse = () => {
    return (
        <div className="academic-courses-area p-relative pt-110 pb-120">
        <Image className="academic-shape-2" src={AcadenicShapeImg} style={{width:'auto', height:'auto'}} alt="shape"/>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-4 col-lg-4">
                    <div className="section-title mb-50">
                        <h2>Academic <span className="down-mark-line-2">Kurslar</span></h2>
                    </div>
                </div>
            </div>
            <div className="row">
                {
                    courses_data.slice(14,17).map((item)=>(
                        <div key={item.id} className="col-xl-4 col-lg-6 col-md-6">
                    <div className="academic-box position-relative mb-30">
                        {item.shapeImg && <Image className="academic-shape" src={item.shapeImg} style={{width:'auto', height:'auto'}} alt="img not found"/>}
                        <div className="academic-thumb">
                            {item.img && <Image src={item.img} style={{width:'100%', height:'auto'}} alt="img not found"/>}
                        </div>
                        <div className="academic-content">
                            <div className="academic-content-header">
                                <Link href={`/course-details/${item.id}`}><h3>{item.title}</h3></Link>
                            </div>
                            <div className="academic-body">
                                <div className="academic-tutor d-flex align-items-center">
                                    <Image src={item.tutorImg} style={{width:'auto', height:'auto'}} alt="img not found"/>
                                    <Link href="/instructor-profile">{item.authorName}</Link>
                                </div>
                                <p>{item.description}</p>
                            </div>
                            <div className="academic-footer">
                                <div className="coursee-clock">
                                    <i className="flaticon-wall-clock"></i><span>{item.courseeDate}</span>
                                </div>
                                <div className="course-creadit">
                                    <i className="flaticon-menu-1"></i><span>{item.courseCreadit}</span>
                                </div>
                                <Link href={`/course-details/${item.id}`} className="edo-course-sec-btn">Apply now</Link>
                            </div>
                        </div>
                    </div>
                
            </div>
                    ))
                }
            </div>
            <div className="row justify-content-center">
                <div className="col-xl-3 text-center">
                    <div className="academic-bottom-btn ">
                        <Link href="/course" className="edo-theme-btn mt-30">View all course</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default AcademicCourse;