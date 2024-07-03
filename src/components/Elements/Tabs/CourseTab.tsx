"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SectionService from "@/services/sectionService";
import { GetAllSectionsPaginatedResponse } from "@/models/response/Section/getAllSectionsPaginatedResponse";
import { Tooltip } from "@nextui-org/react";
import Preloader from "@/components/common/Preloader";
import ErrorComponent from "@/components/errorPage/ErrorComponent";
import '../../../../public/assets/css/tooltipBar.css';

const CourseTab = () => {
  const [activeCategory, setActiveCategory] = useState("");

  const [sections, setSections] = useState<GetAllSectionsPaginatedResponse>();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const sectionService = new SectionService();

  useEffect(() => {
    const fetchSections = async () => {
      try {
        setIsLoading(false);
        const response = await sectionService.getAll();
        setSections(response.data);
      }
      catch (error) {
        setError(error as Error)
      }
      finally {
        setIsLoading(false);
      }
    };

    fetchSections();
  }, []);

  return (

    <section className="course-area p-relative pt-110 pb-90">

      {isLoading ? (<Preloader />)
        : error ? (<ErrorComponent error={error} />)
          : (


            <div className="container">
              <div className="row">
                <div className="col-xl-5 col-lg-5 f-left">
                  <div className="section-title">
                    <h2>
                      En iyi
                      <span>
                        &nbsp;<span className="down-mark-line">Kursları</span>
                      </span>{" "}
                      Keşfet
                    </h2>
                  </div>
                </div>

                <div className="container">
                  <div className="pb-20 f-right">

                    <Link href={`/course`}>
                      <button
                        onClick={() => setActiveCategory("")}
                        className={activeCategory === "" ? "active" : ""}
                        type="button"
                      >
                        <span className="down-mark-line"><b>Tümünü Görüntüle  </b></span>
                        <span className="port-red"> [{sections?.count}]</span>

                      </button>
                    </Link>
                  </div>


                </div>


              </div>

              <div className="course-main-items">
                <div className="tab-content portfolio-tabs-content  ">
                  <div
                    className="tab-pane fade show active "
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <div className="row">
                      <>
                        {sections?.items.slice(0, 6).map((item: any) => (
                          <div className="col-xl-4 col-lg-4 col-md-6 " key={item.id}>
                            <div className="mb-30 eduman-course-main-wrapper">
                              {/* section-wrapper-2 hover durumunda büyür! */}
                              <div className="eduman-course-thumb w-img">
                                <div className="student-course-img2" >
                                  <Link href={`/course-details/${item.id}`}>
                                    <img
                                      src={item.imageUrl}
                                      style={{ width: "100%", height: "auto" }}
                                      alt="img not found"
                                    />
                                  </Link>
                                </div>
                              </div>

                              <div className="eduman-course-wraper">
                                <div className=" category-color">
                                  <Link
                                    href={`/course`}>
                                    {item.categoryName}
                                  </Link>
                                </div>

                                <div className="eduman-course-text">
                                  <h3>
                                    <Tooltip className="tooltip-bar" content={item.name} placement="top-end" >
                                      <Link href={`/course-details/${item.id}`}>
                                        {item.name}
                                      </Link>
                                    </Tooltip>
                                  </h3>
                                </div>

                                {item.instructors.map((instructor: any) => (
                                    <div key ={instructor.id} className="user-icon">
                                        <Link  href={`/instructor-profile/${instructor.id}`}>

                                      <img
                                        src={instructor.imageUrl}
                                        style={{ width: "28px", height: "28px", borderRadius: "150px" }}
                                        alt="img not found"
                                      />
                                      <span> {instructor.name}</span>
                                    </Link>
                                  </div>
                                ))}
                              </div>

                              <div className="eduman-course-footer">
                                <div className="course-link-color-6">
                                  <Link href={`/course-details/${item.id}`}>
                                    <span className="me-2">Eğitime Git</span>
                                    <span className="far fa-arrow-right "></span> 
                                  </Link>
                                </div>

                                        {item.instructors.map((instructor: any) => (
                                            <div key={instructor.id} className="portfolio-price">
                                    <span>
                                            <i className="fal fa-tv"></i>&nbsp; {item.courseCount} Kurs
                                    </span>
                                  </div>
                                ))}

                              </div>
                            </div>
                          </div>
                        ))}
                      </>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )};
    </section>
  );

};
export default CourseTab;
