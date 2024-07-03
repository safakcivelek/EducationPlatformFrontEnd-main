import { useState, useEffect } from 'react';

const sortAlphabetically = (array) => {
    return array.sort((a, b) => a.localeCompare(b));
  };

export const useCategoryProcessor = (sections) => {
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = sections.map(section => section.categoryName);
      const uniqueCategories = Array.from(new Set(categories));
      const sortedCategories = sortAlphabetically(uniqueCategories);
      setAllCategories(sortedCategories);
    };

    fetchCategories();
  }, [sections]);

  return allCategories;
};
