import { useState, useEffect } from 'react';

const useSelectedFilter = (sections, setFilteredSections) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedInstructors, setSelectedInstructors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchSections = async () => {
      try {
        // Filtrelenen yeni section listesi
        const filteredSections =
          selectedCategories.length === 0 && selectedInstructors.length === 0
            ? []
            : sections.filter(section => {
                const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(section.categoryName);
                const instructorMatch =
                  selectedInstructors.length === 0 || section.instructors.some(instructor => selectedInstructors.includes(instructor.name));
                return categoryMatch && instructorMatch;
              });

        // Filtreleme seçimi değişirse CourseContent'deki filteredSections state'ini günceller.
        setFilteredSections(filteredSections);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSections();
  }, [sections, selectedCategories, selectedInstructors, setFilteredSections]);

  return {
    selectedCategories,
    setSelectedCategories,
    selectedInstructors,
    setSelectedInstructors,
    isLoading,
    error,
  };
};

export default useSelectedFilter;