import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StudentShapeOne from '../../../public/assets/img/shape/student-shape-03.png';
import StudentShapeTwo from '../../../public/assets/img/shape/student-shape-04.png';
import StudentShapeThere from '../../../public/assets/img/shape/student-shape-05.png';
import StudentShapeFour from '../../../public/assets/img/shape/student-shape-06.png';
import StudentShapeFive from '../../../public/assets/img/shape/student-shape-07.png';
import StudentShapeSix from '../../../public/assets/img/student-choose/student.png';

const StudentChooseSection = () => {
    return (
        <div className="student-choose-area fix pt-120 pb-110">
         <div className="container">
            <div className="row">
               <div className="col-xl-5 col-lg-5">
                  <div className="student-wrapper">
                     <div className="section-title mb-30">
                        <h2>Why Students <span className="down-mark-line">Choose</span> Us for Gain Their Knowledge</h2>
                     </div>
                     <div className="sitdent-choose-content">
                        <p>Helping employees gain skills and providing career development often take a back seat to
                           business priorities but workplace better right now. Seventy percent of workers think that.
                        </p>
                     </div>
                     <div className="student-choose-list">
                        <ul>
                           <li><i className="fas fa-check-circle"></i>Free for physically handcraft </li>
                           <li><i className="fas fa-check-circle"></i>Easy to enroll courses</li>
                           <li><i className="fas fa-check-circle"></i>Course certificate for particular course</li>
                        </ul>
                     </div>
                     <div className="student-btn">
                        <Link href="/about" className="edu-sec-btn">More about us</Link>
                     </div>
                  </div>
               </div>
               <div className="col-xl-2 col-lg-2">
                  <div className="student-wrapper position-relative">
                     <div className="shap-01">
                     </div>
                  </div>
               </div>
               <div className="col-xl-5 col-lg-5">
                  <div className="student-choose-wrapper position-relative">
                     <div className="shap-02">
                     </div>
                     <div className="shap-03">
                        <Image src={StudentShapeOne} style={{width:'100%', height:'auto'}} alt="img not found"/>
                     </div>
                     <div className="shap-04">
                        <Image src={StudentShapeTwo} style={{width:'100%', height:'auto'}} alt="img not found"/>
                     </div>
                     <div className="shap-05">
                        <Image src={StudentShapeThere} style={{width:'100%', height:'auto'}} alt="img not found"/>
                     </div>
                     <div className="shap-06">
                        <Image src={StudentShapeFour} style={{width:'100%', height:'auto'}} alt="img not found"/>
                     </div>
                     <div className="shap-07">
                        <Image src={StudentShapeFive} style={{width:'100%', height:'auto'}} alt="img not found"/>
                     </div>
                     <div className="student-choose-thumb">
                        <Image src={StudentShapeSix} style={{width:'100%', height:'auto'}} alt="img not found"/>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    );
};

export default StudentChooseSection;