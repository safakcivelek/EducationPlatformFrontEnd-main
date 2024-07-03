import Link from 'next/link';
import React from 'react';
import { useInstructorProfile } from '@/contextApi/InstructorProfileContext';
import { Tooltip } from "@nextui-org/react";
import '../../../public/assets/css/tooltipBar.css';


const InstructorEnrolledCourses = () => {
    const { instructorProfile } = useInstructorProfile();

    return (
        <>
            {
                instructorProfile?.sections?.map((item) => (
                    <div key={item.id} className="col-xl-4 col-lg-6 col-md-6">
                        <div className="section-wrapper-2 mb-30">
                            <div className="student-course-img">
                                <Link href={`/course-details/${item.id}`}>
                                    <img src={item.imageUrl} style={{ width: '100%', height: 'auto' }} alt="course-img" />
                                </Link>
                               
                            </div>

                            <div className="student-course-footer">

                                <div className="student-course-linkter">
                                    <div className="course-lessons">
                                        <span className="ms-1 category-color">{item.categoryName}</span>
                                    </div>
                                </div>

                                <div className="student-course-text" >
                                    <h3>
                                        <Tooltip className="tooltip-bar" content={item.name} delay={500} closeDelay={0} placement="top-end" >
                                            <Link href={`/course-details/${item.id}`}>
                                                {item.name}
                                            </Link>
                                        </Tooltip>
                                    </h3>
                                </div>

                                <div className="student-course-linkter">
                                   
                                         <div className="course-link-color-6">
                                            <Link href={`/course-details/${item.id}`}>
                                                <span className="me-2">Eğitime Git</span>
                                            </Link>
                                        </div>
                                    
                                    <div className="portfolio-price">
                                        <span>
                                            <i className="fal fa-tv"></i> &nbsp;{item.courseCount} Kurs
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                ))
            }

        </>
    );
};

export default InstructorEnrolledCourses;































{/* <div className="course-cart"> */ }
{/* <div className="course-info-wrapper"> */ }
{/* <div className="cart-info-body"> */ }
{/* <Link href="/course" className="category-color category-color-1">Kadiro</Link>
                                        <Link href="/course-details"><h3>{item.description}</h3></Link> */}
{/* <div className="info-cart-text">
                                            <ul>
                                                {item.description?.map((item: any) => (
                                                    <li key={item.id}>
                                                        <i className={item.icon}></i>
                                                        {item.description}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div> */}
{/* <div className="course-action">
                                            <Link href="/course-details" className="view-details-btn">aaa Details</Link>
                                            <button className="wishlist-btn"><i className="flaticon-like"></i></button>
                                            <Link href="/course-details" className="c-share-btn"><i className="flaticon-previous"></i></Link>
                                        </div> */}
{/* </div> */ }
{/* </div> */ }
{/* </div> */ }


{/* <div className="course-icon">
                                        {getRating(item?.description)}
                                        <span>({item.description})</span>
                                    </div> */}