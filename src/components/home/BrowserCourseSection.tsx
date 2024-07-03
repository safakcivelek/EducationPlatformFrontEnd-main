import React from 'react';
import Link from 'next/link';
import CourseImg from '../../../public/assets/img/browser-course/browser-course-01.jpg';
import CourseImgTwo from '../../../public/assets/img/browser-course/browser-course-02.jpg';
import Image from 'next/image';

const BrowserCourseSection = () => {
    return (
        <div className="browser-course-area">
         <div className="container">
            <div className="row">
               <div className="col-xl-6 col-lg-6 col-md-12 mb-30">
                  <div className="browser-course-wrapper course-height">
                     <div className="browser-course-bg">
                        <Image src={CourseImg} style={{width:'100%', height:'auto'}} alt="img not found"/>
                     </div>
                     <div className="browser-course-content">
                        <span>Start from today</span>
                        <div className="browser-course-tittle">
                           <Link href="/instructor">Become an instructor and spread your knowledge</Link>
                        </div>
                        <div className="browser-btn">
                           <Link href="/become-instructor" className="course-btn">View details</Link>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-xl-6 col-lg-6 col-md-12 mb-30">
                  <div className="browser-course-wrapper course-height">
                     <div className="browser-course-bg">
                     <Image src={CourseImgTwo} style={{width:'100%', height:'auto'}} alt="img not found"/>
                     </div>
                     <div className="row">
                        <div className="col-xl-7 col-lg-7">
                           <div className="browser-course-content">
                              <span>Discover your gain</span>
                              <div className="browser-course-tittle">
                                    <Link href="/course-details">Keep your skilled centers of excellence competitive</Link>
                              </div>
                              <div className="browser-btn">
                                 <Link href="/course" className="course-btn">Browse courses</Link>
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

export default BrowserCourseSection;