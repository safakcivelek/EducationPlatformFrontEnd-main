"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import CategoryService from "@/services/categoryService";
import { SectionModel } from "../../models/response/Section/SectionModel";
import Preloader from "../common/Preloader";
import { Tooltip } from "@nextui-org/react";
import ErrorComponent from "../errorPage/ErrorComponent";
import '../../../public/assets/css/tooltipBar.css';
import useSearchSections from "@/hooks/searchHook/useSearch";
import { useRouter } from 'next/navigation';
import CourseSidebarArea from "../common/courses-sidebar/CourseSidebarArea";
import SearchService from "@/services/searchService";


export interface SearchContentProps {
    setSectionsCount: React.Dispatch<React.SetStateAction<number>>;
    sections: SectionModel[];
    setSections: React.Dispatch<React.SetStateAction<SectionModel[]>>;
    filteredSections: SectionModel[];
    setFilteredSections: React.Dispatch<React.SetStateAction<SectionModel[]>>;
}

const SearchContent: React.FC<SearchContentProps> =
    ({ sections, setSections, filteredSections, setFilteredSections }) => {

        // Sayfalama için state tanımlaması
        const [currentPage, setCurrentPage] = useState(0);

        const [slug, setSearchItem] = useState<string | null>(null);

        const pageSize = 8;

        useEffect(() => {

            const path = window.location.pathname;
            const pathSegments = path.split('/');
            const slug = pathSegments[pathSegments.length - 1];
            const decodedSlug = decodeURIComponent(slug);
            setSearchItem(decodedSlug);
        }, []);

        const { searchedSections, error, isLoading, totalResults, searchTerm } = useSearchSections(slug, currentPage, pageSize);

        useEffect(() => {
            setSections(searchedSections);
        }, [searchedSections])

        // const handlePageChange = (pageNumber: any) => {
        //     setCurrentPage(pageNumber);
        // };
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
                                                    {/* <div className={`category-color`}>{section.categoryName} </div> */}
                                                    <div className="student-course-linkter">
                                                        <div className="course-lessons">
                                                            <Link href={`/course`}>
                                                                <span className="ms-1 category-color">{section.categoryName}</span>
                                                            </Link>
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
                                    {/* Eğer arama sonucu bulunamazsa ve searchTerm varsa onu göster */}
                                    {sections.length === 0 && searchTerm && (

                                        <div className="col-10 text-center">
                                            <i className="fas fa-surprise fa-2x"></i>
                                            <h4>Maalesef {searchTerm} araması için sonuç bulunamadı !</h4>
                                            <br />
                                            <h5 className="text-left">Aramanızı düzenlemeyi deneyin.</h5>

                                            <br />
                                            <div >
                                                <Link href="/">
                                                    <i className="fal fa-hand-point-right fa-lg" style={{ marginRight: "10px" }}></i>
                                                    <p className="category-color category-color-6"> Anasayfaya Dön </p>
                                                    <i className="fal fa-hand-point-left fa-lg" style={{ marginLeft: "10px" }}></i>
                                                </Link>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        );
    };

export default SearchContent;