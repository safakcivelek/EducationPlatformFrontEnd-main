"use client";
import React, { useEffect, useState } from "react";
import SectionService from "@/services/sectionService";
import Link from "next/link";
import { SectionModel } from "../../models/response/Section/SectionModel";
import Preloader from "../common/Preloader";
import { Tooltip } from "@nextui-org/react";
import ErrorComponent from "../errorPage/ErrorComponent";
import '../../../public/assets/css/tooltipBar.css';
import '../../../public/assets/css/errorServer.css';
import CourseSidebarArea from "../common/courses-sidebar/CourseSidebarArea";

export interface CourseContentProps {
    setSectionsCount: React.Dispatch<React.SetStateAction<number>>;
    sections: SectionModel[];
    filteredSections: SectionModel[];
    setFilteredSections: React.Dispatch<React.SetStateAction<SectionModel[]>>;
    setSections: React.Dispatch<React.SetStateAction<SectionModel[]>>;
    isLoading: boolean;
    error: Error;
}

const CourseContent: React.FC<CourseContentProps> = ({ setSectionsCount, sections, setSections, isLoading, error }) => {
    const sectionService = new SectionService();
    const [filteredSections, setFilteredSections] = useState<SectionModel[]>([]);


    // listelenen section sayısını tetikler
    useEffect(() => {
        setSectionsCount(filteredSections.length > 0 ? filteredSections.length : sections.length);
    }, [sections, filteredSections, setSectionsCount]);

    return (
        <section className="course-content-area pb-90">
            {isLoading ? (
                <Preloader />
            ) : error ? (
                <ErrorComponent error={error} />
            ) : (

                <div className="container">
                    <div className="row mb-10">
                        <div className="col-xl-3 col-lg-4 col-md-12">
                            {/* Sol taraftaki sidebar - Start*/}
                            <CourseSidebarArea
                                // Tüm bölümleri CourseSidebarArea bileşenine iletiyoruz
                                sections={sections}
                                // Burada setFilteredSections prop'u ile setFilteredSections fonksiyonunu CourseSidebarArea bileşenine iletiyoruz.
                                setFilteredSections={setFilteredSections}
                            />
                            {/* Sol taraftaki sidebar - End*/}
                        </div>
                        <div className="col-xl-9 col-lg-8 col-md-12">
                            {/* Sağ taraftaki section listesi */}
                            <div className="row" >

                                {(filteredSections.length > 0 ? filteredSections : sections).map((section) => (
                                    <div key={section.id} className="col-xl-4 col-lg-6 col-md-6" >
                                        <div className="section-wrapper-2 mb-30 ">
                                            <div className="student-course-img">
                                                {section.imageUrl && (
                                                    <Link href={`/course-details/${section.id}`}>
                                                        <img
                                                            src={section.imageUrl}
                                                            style={{ width: "100%", height: "auto" }}
                                                            alt="course-img"
                                                        />
                                                    </Link>
                                                )}
                                            </div>

                                            <div className="student-course-footer">

                                                <div className="student-course-linkter">
                                                    <div className="course-lessons">

                                                        <span className="ms-1 category-color">{section.categoryName}</span>

                                                    </div>
                                                </div>

                                                <div className="student-course-text" >
                                                    <h3>
                                                        <Tooltip className="tooltip-bar" content={section.name} delay={500} closeDelay={0} placement="top-end" >
                                                            <Link href={`/course-details/${section.id}`}>
                                                                {section.name}
                                                            </Link>
                                                        </Tooltip>
                                                    </h3>
                                                </div>

                                                <div className="student-course-linkter">
                                                    <div className="user-icon">
                                                        {section?.instructors?.map((instructor) => (
                                                            <Link key={instructor.id} href={`/instructor-profile/${instructor.id}`}>
                                                                <i className="fas fa-user"></i>{" "}{instructor.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                    <div className="portfolio-price">
                                                        <span>
                                                            <i className="fal fa-tv"></i> &nbsp;{section.courseCount} Kurs
                                                        </span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="row">
                                <div className="col-12"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default CourseContent;