// import React from "react";
// import Breadcrumb from "../common/breadcrumb/Breadcrumb";
// import CourseBar from "../course/CourseBar";
// import courses_data from "@/data/courses-data";
// import Link from "next/link";
// import Image from "next/image";
// import CourseSidebarArea from "../common/courses-sidebar/CourseSidebarArea";
// import PaginationData from "../common/pagination/pagination-data";

// const CourseFourMain = () => {
//   return (
//     <main>
//       <Breadcrumb title="Course 04" subTitle="Course" />
//       <CourseBar />
//       <div className="course-content-area pb-90">
//         <div className="container">
//           <div className="row mb-10">
//             <div className="col-xl-4 col-lg-4 col-md-12">
//               <CourseSidebarArea />
//             </div>
//             <div className="col-xl-8 col-lg-8 col-md-12">
//               <div className="row">
//                 {courses_data.slice(55, 61).map((item) => (
//                   <div key={item.id} className="col-xl-6 col-lg-6 col-md-6">
//                     <div className="academic-box mb-30">
//                       <div className="academic-thumb">
//                         {item.img && <Image src={item.img} style={{ width: "100%", height: "auto" }} alt="img not found" />}
//                       </div>
//                       <div className="academic-content">
//                         <div className="academic-content-header">
//                           <Link href={`/course-details/${item.id}`}>
//                             <h3>{item.title}</h3>
//                           </Link>
//                         </div>
//                         <div className="academic-body">
//                           <div className="academic-tutor d-flex align-items-center">
//                             <Image
//                               src={item.tutorImg}
//                               style={{ width: "auto", height: "auto" }}
//                               alt="img not found"
//                             />
//                             <Link href="/instructor-profile">
//                               {item.authorName}
//                             </Link>
//                           </div>
//                           <p>{item.description}</p>
//                         </div>
//                         <div className="academic-footer">
//                           <div className="coursee-clock">
//                             <i className="flaticon-clock"></i>
//                             <span>{item.courseeDate}</span>
//                           </div>
//                           <div className="course-creadit">
//                             <i className="flaticon-menu-1"></i>
//                             <span>{item.courseCreadit}</span>
//                           </div>
//                           <Link
//                             href={`/course-details/${item.id}`}
//                             className="edo-course-sec-btn"
//                           >
//                             Apply now
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="row">
//                 <div className="col-12">
//                   <PaginationData />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default CourseFourMain;
