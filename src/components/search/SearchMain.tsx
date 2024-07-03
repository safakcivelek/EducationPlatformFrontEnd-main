
"use client"
import { SectionModel } from "@/models/response/Section/SectionModel";
import { useEffect, useState } from "react";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import SearchContent from "./searchContent";
import useSearchSections from "@/hooks/searchHook/useSearch";
import CourseBar from "../course/CourseBar";
import useSections from "@/hooks/sectionHook/useSection";


const SearchMain = () => {

    const { sections, setSections, isLoading, error } = useSections();
    const [sectionsCount, setSectionsCount] = useState<number>(0);
    const [filteredSections, setFilteredSections] = useState<SectionModel[]>([]);

    // listelenen section sayısını tetikler
    useEffect(() => {
        setSectionsCount(filteredSections.length > 0 ? filteredSections.length : sections.length);
    }, [sections, filteredSections, setSectionsCount]);


    return (
        <>
            <Breadcrumb title="Kurs Ara" subTitle="Ara" />
            <CourseBar sections={sections} setSections={setSections} sectionsCount={sectionsCount} isLoading={isLoading} error={error} />
            <SearchContent
                sections={sections}
                setSections={setSections}
                setSectionsCount={setSectionsCount}
                filteredSections={filteredSections}
                setFilteredSections={setFilteredSections}
            />

        </>
    );
};

export default SearchMain;