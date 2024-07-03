import { useState, useEffect } from 'react';

const sortAlphabetically = (array) => {
    return array.sort((a, b) => a.localeCompare(b));
};

export const useInstructorProcessor = (sections) => {
    const [allInstructors, setAllInstructors] = useState([]);

    useEffect(() => {
        const fetchInstructors = async () => {
            const instructors = sections.flatMap(section => section.instructors.map(instructor => instructor.name));
            const uniqueInstructors = Array.from(new Set(instructors));
            const sortedInstructors = sortAlphabetically(uniqueInstructors);
            setAllInstructors(sortedInstructors);
        };

        fetchInstructors();
    }, [sections]);

    return allInstructors;
};