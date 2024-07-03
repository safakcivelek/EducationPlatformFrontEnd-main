"use client"
import React, { useEffect, useState } from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import CourseContent from './CourseContent';
import CourseBar from './CourseBar';
import { SectionModel } from '@/models/response/Section/SectionModel';
import useSections from '@/hooks/sectionHook/useSection';


const CourseMain = () => {
    const { sections, setSections, isLoading, error } = useSections();
    const [sectionsCount, setSectionsCount] = useState<number>(0);
    const [filteredSections, setFilteredSections] = useState<SectionModel[]>([]);

    // listelenen section sayısını tetikler
    useEffect(() => {
        setSectionsCount(filteredSections.length > 0 ? filteredSections.length : sections.length);
    }, [sections, filteredSections, setSectionsCount]);

    return (
        <>
            <Breadcrumb title="Kurslar" subTitle="Kurslar" />
            <CourseBar sections={sections} setSections={setSections} sectionsCount={sectionsCount} isLoading={isLoading} error={error} />
            <CourseContent
                sections={sections}
                setSections={setSections}
                setSectionsCount={setSectionsCount}
                filteredSections={filteredSections}
                setFilteredSections={setFilteredSections}
                isLoading={isLoading} error={error}
            />
        </>
    );
};

export default CourseMain;