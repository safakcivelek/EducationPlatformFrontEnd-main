// "use client";

// import React from "react";
// import Link from "next/link";
// import Breadcrumb from "../common/breadcrumb/Breadcrumb";
// import CourseBar from "../course/CourseBar";
// import courses_data from "@/data/courses-data";
// import Image from "next/image";
// import { useDispatch } from "react-redux";
// import { productsType } from "@/interFace/interFace";
// import { cart_product } from "@/redux/slices/cartSlice";
// import { wishlist_product } from "@/redux/slices/wishlist-slice";
// import CourseSidebarArea from "../common/courses-sidebar/CourseSidebarArea";
// import PaginationData from "../common/pagination/pagination-data";

// const CourseThreeMain = () => {
//   const dispatch = useDispatch();
//   const handleAddToCart = (product: productsType) => {
//     dispatch(cart_product(product));
//   };

//   return (
//     <main>
//       <Breadcrumb title="Course 03" subTitle="Course" />
//       <CourseBar />
//       <section className="course-content-area pb-90">
//         <div className="container">
//           <div className="row mb-10">
//             <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12">
//               <CourseSidebarArea />
//             </div>
//             <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
//               <div className="row">
//                 {courses_data.slice(47, 55).map((item: any) => (
//                   <div
//                     key={item.id}
//                     className="col-xxl-6 col-xl-6 col-lg-6 col-md-6"
//                   >
//                     <div className="eduman-course-main-wrapper mb-30">
//                       <div className="eduman-course-thumb w-img">
//                         <Link href={`/course-details/${item.id}`}>
//                           {item.img && (
//                             <Image
//                               src={item.img}
//                               style={{ width: "100%", height: "auto" }}
//                               alt="course-img"
//                             />
//                           )}
//                         </Link>
//                       </div>
//                       <div className="course-cart">
//                         <div className="course-info-wrapper">
//                           <div className="cart-info-body">
//                             <span
//                               className={
//                                 item.categoryColor
//                                   ? `category-color ${item.categoryColor}`
//                                   : "category-color category-color-1"
//                               }
//                             >
//                               <Link href="/course">{item.category}</Link>
//                             </span>
//                             <Link href={`/course-details/${item.id}`}>
//                               <h3>{item.title}</h3>
//                             </Link>
//                             <div className="cart-lavel">
//                               <h5>
//                                 Level : <span>{item.level}</span>
//                               </h5>
//                               <p>{item.description}</p>
//                             </div>
//                             <div className="info-cart-text">
//                               <ul>
//                                 {item?.checkIcons?.map((item: any) => (
//                                   <li key={item.id}>
//                                     <i className={item.icon}></i>
//                                     {item.checkInfo}
//                                   </li>
//                                 ))}
//                               </ul>
//                             </div>
//                             <div className="course-action">
//                               <Link
//                                 href={`/course-details/${item.id}`}
//                                 className="view-details-btn"
//                               >
//                                 View Details
//                               </Link>
//                               <button
//                                 onClick={() => handleAddToCart(item)}
//                                 className="wishlist-btn"
//                               >
//                                 <i className="fal fa-cart-arrow-down"></i>
//                               </button>
//                               <button
//                                 onClick={() =>
//                                   dispatch(wishlist_product(item))
//                                 }
//                                 className="c-share-btn"
//                               >
//                                 <i className="flaticon-like"></i>
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="eduman-course-wraper">
//                         <div className="eduman-course-heading">
//                           <Link
//                             href="/course"
//                             className={
//                               item.courseLinkColor
//                                 ? `${item.courseLinkColor}`
//                                 : "course-link-color-5"
//                             }
//                           >
//                             Data Science
//                           </Link>
//                           <span className="couse-star">
//                             <i className="fas fa-star"></i>
//                             {item.ratingAve} ({item.ratingCount})
//                           </span>
//                         </div>
//                         <div className="eduman-course-text">
//                           <h3>
//                             <Link href={`/course-details/${item.id}`}>
//                               {item.title}
//                             </Link>
//                           </h3>
//                         </div>
//                         <div className="eduman-course-meta">
//                           <div className="eduman-course-price">
//                             <span className="price-now">
//                               {item.price === 0 ? "FREE" : `$${item.price}`}
//                             </span>
//                             <del className="price-old">
//                               {item.oldPrice ? " " : `$${item.oldPrice}`}
//                             </del>
//                           </div>
//                           <div className="eduman-course-tutor">
//                             <Link href="/instructor-profile">
//                               <Image
//                                 style={{ width: "auto", height: "auto" }}
//                                 src={item.tutorImg}
//                                 alt="tutor-img"
//                               />
//                             </Link>
//                             <Link href="/instructor-profile">
//                               <span>{item.authorName}</span>
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="eduman-course-footer">
//                         <div className="course-lessson-svg">
//                           <i className="fal fa-tv"></i>
//                           <span className="ms-2">{item.lessons}</span>
//                         </div>
//                         <div className="course-deteals-btn">
//                           <Link href={`/course-details/${item.id}`}>
//                             <span className="me-2">View Details</span>
//                             <i className="far fa-arrow-right"></i>
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
//       </section>
//     </main>
//   );
// };

// export default CourseThreeMain;
