"use client";
import ErrorComponent from '@/components/errorPage/ErrorComponent';
import { SectionModel } from '@/models/response/Section/SectionModel';
import React, { useState, useEffect } from 'react';
import Preloader from '../Preloader';
import { useCategoryProcessor } from '@/hooks/CourseSideBarAreaHook/useCategoryProcessor';
import { useInstructorProcessor } from '@/hooks/CourseSideBarAreaHook/useInstructorProcessor';
import useSelectedFilter from '@/hooks/CourseSideBarAreaHook/useSelectedFilters ';

export interface CourseSidebarAreaProps {
  // CourseContent'ten gelen section verileri
  sections: SectionModel[];
  // setFilteredSections fonksiyonu burada props olarak alıyoruz ve kullanılabilir hale getiriyoruz.
  setFilteredSections: React.Dispatch<React.SetStateAction<SectionModel[]>>;
}

const CourseSidebarArea: React.FC<CourseSidebarAreaProps> = ({ sections, setFilteredSections }) => {

  const allCategories = useCategoryProcessor(sections);
  const allInstructors = useInstructorProcessor(sections);
  const { selectedCategories, setSelectedCategories, selectedInstructors, setSelectedInstructors, isLoading, error } = useSelectedFilter(
    sections,
    setFilteredSections
  );

  // kategorilerin seçilmesini ve seçimlerin güncellenmesini sağlar. 
  const handleCategoryChange = (categoryName: string) => {
    setSelectedCategories(prevCategories => {
      if (prevCategories.includes(categoryName)) {
        return prevCategories.filter(c => c !== categoryName);
      } else {
        return [...prevCategories, categoryName];
      }
    });
  };

  // eğitmenlerin seçilmesini ve seçimlerin güncellenmesini sağlar. 
  const handleInstructorChange = (instructorName: string) => {
    setSelectedInstructors(prevInstructors => {
      if (prevInstructors.includes(instructorName)) {
        return prevInstructors.filter(c => c !== instructorName);
      } else {
        return [...prevInstructors, instructorName];
      }
    });
  };

  // Soldaki filtreleme barlarının açık ve kapalı durumunu yönetir.
  interface FilterStates {
    Categories: boolean;
    Instructors: boolean;
  }

  const [filterStates, setFilterStates] = useState<FilterStates>({
    Categories: true, Instructors: true
  });

  const handleToggle = (stateName: keyof FilterStates) => {
    setFilterStates((prevState) => ({
      ...prevState,
      [stateName]: !prevState[stateName],
    }));
  };

  return (
    <div>
      {isLoading ? (
        <Preloader />
      ) : error ? (
        <ErrorComponent error={error} />
      ) : (
        <div className="course-sidebar-area">
          {/* Categories */}
          {allCategories.length >= 2 && (
            <div className="course-sidebar-widget mb-20 section-style">
              <div className={`course-sidebar-info ${filterStates.Categories ? "danger" : "content-hidden"}`}>
                <h3 className="drop-btn" onClick={() => handleToggle("Categories")}>
                  Kategoriler
                </h3>
                <ul>
                  {allCategories.map((category, index) => (
                    <li key={index}>
                      <div className="course-sidebar-list">
                        <input
                          className="edu-check-box"
                          type="checkbox"
                          id={`category-${category}`}
                          checked={selectedCategories.includes(category)}
                          onChange={() => handleCategoryChange(category)}
                        />
                        <label className="edu-check-label" htmlFor={`category-${category}`}>
                          {category}
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          {/* Instructors */}
          <div className="course-sidebar-widget mb-20 section-style">
            <div className={`course-sidebar-info ${filterStates.Instructors ? "danger" : "content-hidden"}`}>
              <h3 className="drop-btn" onClick={() => handleToggle("Instructors")}>
                Eğitmenler
              </h3>
              <ul>
                {allInstructors.map((instructor, index) => (
                  <li key={index}>
                    <div className="course-sidebar-list">
                      <input
                        className="edu-check-box"
                        type="checkbox"
                        id={`instructor-${index}`}
                        checked={selectedInstructors.includes(instructor)}
                        onChange={() => handleInstructorChange(instructor)}
                      />
                      <label className="edu-check-label" htmlFor={`instructor-${index}`}>
                        {instructor}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>


        </div>
      )}
    </div>
  );
}
export default CourseSidebarArea;