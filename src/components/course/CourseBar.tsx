"use client";
import useGlobalContext from "@/hooks/use-context";
import { SectionModel } from "@/models/response/Section/SectionModel";
import React, { useEffect, useState } from "react";

export interface CourseBarProps {
    sectionsCount: number;
    setSections: React.Dispatch<React.SetStateAction<SectionModel[]>>;
    sections: SectionModel[];
    isLoading: boolean;
    error: Error;
}

const CourseBar: React.FC<CourseBarProps> = ({ sectionsCount, setSections, sections, isLoading, error }) => {

    const [sortingOption, setSortingOption] = useState<string>('');

    const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOption = event.target.value;
        setSortingOption(selectedOption);

        let sortedSectionsCopy = [...sections];

        if (selectedOption === 'az') {
            sortedSectionsCopy.sort((a, b) => a.name.localeCompare(b.name));
        } else if (selectedOption === 'za') {
            sortedSectionsCopy.sort((a, b) => b.name.localeCompare(a.name));
        }

        setSections(sortedSectionsCopy);
    };


    return (
        <div className="course-bar-up-area pt-50">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="course-main-wrapper mb-30">

                            <div className="course-sidebar-tab">
                                <div className="course-sidebar-wrapper">
                                    <div className="curse-tab-left-wrap">
                                        <div className="course-results">
                                            <span className="course-result-number">{"Eğitimler araması için"} ({sectionsCount}) {"sonuç gösteriliyor"}</span>
                                        </div>
                                    </div>
                                    <div className="couse-dropdown">
                                        <div className="course-drop-inner">
                                            <select onChange={handleSort} value={sortingOption}>
                                                <option value="">Sıralama Seç</option>
                                                <option value="az">A-Z</option>
                                                <option value="za">Z-A</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseBar;