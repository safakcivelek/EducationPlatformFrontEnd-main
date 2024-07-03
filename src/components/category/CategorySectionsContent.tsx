"use client";
import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import CategoryService from "@/services/categoryService";
import { SectionModel } from "../../models/response/Section/SectionModel";
import Preloader from "../common/Preloader";
import { Tooltip } from "@nextui-org/react";
import ErrorComponent from "../errorPage/ErrorComponent";
import '../../../public/assets/css/tooltipBar.css';
import CourseSidebarArea from "../common/courses-sidebar/CourseSidebarArea";

export interface CategorySectionsProps {
    id: string;
    setSectionsCount: React.Dispatch<React.SetStateAction<number>>;
    sections: SectionModel[];
    setSections: React.Dispatch<React.SetStateAction<SectionModel[]>>;
    filteredSections: SectionModel[];
    setFilteredSections: React.Dispatch<React.SetStateAction<SectionModel[]>>;
}
const CategorySectionsContent: React.FC<CategorySectionsProps> =
    ({ id, sections, setSections, filteredSections, setFilteredSections }) => {

        const categoryService = new CategoryService();

        const [isLoading, setIsLoading] = useState<boolean>(true);
        const [error, setError] = useState<Error | null>(null);

        const fetchSections = useCallback(async () => {
            try {
                setIsLoading(true);
                const response = await categoryService.getSectionsByCategoryId(id);
                setSections(response.data.items[0].sections);
            } catch (error) {
                setError(error as Error);
            } finally {
                setIsLoading(false);
            }
        }, [id]);
        useEffect(() => {
            if (id) {
                fetchSections();
            }
        }, [id, fetchSections]);

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
                                    sections={sections}
                                    setFilteredSections={setFilteredSections}
                                />

                                {/* Sol taraftaki sidebar - End*/}
                            </div>
                            <div className="col-xl-9 col-lg-8 col-md-12">
                                {/* Sağ taraftaki section listesi */}
                                <div className="row">
                                    {(filteredSections.length > 0 ? filteredSections : sections).map((section) => (
                                        <div key={section.id} className="col-xl-4 col-lg-6 col-md-6">
                                            <div className="section-wrapper-2 mb-30">
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
                                                    <div className={`category-color`}>{section.categoryName} </div>

                                                    <div className="student-course-text" style={{ marginTop: '-12px' }}>
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
                                                                <i className="fal fa-tv"></i> {section.courseCount || 0} Kurs
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

export default CategorySectionsContent;