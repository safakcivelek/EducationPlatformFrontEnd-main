import React from "react";
import StudentEnrolledCourses from "./StudentEnrolledCourses";

const StudentProfileEnroll = () => {

  return (
    <>
      <div className="student-profile-enroll eduman-course-text">    
        <div className="tab-content" id="myTabContent">
          <div>            
            <div className="student-profile-enrolled-course">
              <div className="row">
                <StudentEnrolledCourses />
              </div>
            </div>            
          </div>                
        </div>
      </div>
    </>
  );
};

export default StudentProfileEnroll;

