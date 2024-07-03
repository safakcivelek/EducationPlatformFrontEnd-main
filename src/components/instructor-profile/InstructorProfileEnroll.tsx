import React from "react";
import InstructorEnrolledCourses from "./InstructorEnrolledCourses";



const InstructorProfileEnroll = () => {


  return (
    <>
      <div className="student-profile-enroll">
       
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="enrolled"
            role="tabpanel"
            aria-labelledby="enrolled-tab">
              
            <div className="student-profile-enrolled-course">
              <div className="row">
                <InstructorEnrolledCourses />

              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="active"
            role="tabpanel"
            aria-labelledby="active-tab"
          >
           
          </div>
          
        </div>
      </div>
    </>
  );
};

export default InstructorProfileEnroll;



