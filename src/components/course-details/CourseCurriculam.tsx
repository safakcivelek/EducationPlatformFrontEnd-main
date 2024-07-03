
"use client";

import { useSectionDetail } from '@/hooks/courseHook/courseDetail';
import { useLockSection } from '@/hooks/courseHook/lockSection';

import { getSectionLockResponse } from '@/models/response/Section/getSectionLockResponse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ModalVideo from "react-modal-video";

export interface CourseCurriculamProps {
  id: string;
}
const CourseCurriculam: React.FC<CourseCurriculamProps> = ({ id }) => {


  const { sections, error, isLoading } = useSectionDetail(id!);


  const [isOpen, setIsOpen] = useState(false);
  const [videoId, setvideoId] = useState("");
  const openVideoModal = (videoUrl: string) => {
    setIsOpen(!isOpen);
    setvideoId(videoUrl);
  };

  const { verify } = useLockSection();


  return (
    <>
      <div className="course-curriculum pt-40 pb-50">
        <div className="course-curriculam">
          <h4>Eğitim İçeriği</h4>
        </div>
        <div className="course-curriculam-accodion mt-30">
          <div className="accordion" id="accordionExample">
            {sections?.courses?.map((course, index) => (
              <div className="accordion-item" key={index}>
                <div className="accordion-header" id={`heading${index}`}>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded="true"
                    aria-controls={`collapse${index}`}
                  >
                    <span className="accordion-header">
                      <span className="accordion-tittle">
                        <span>{course.name}</span>
                      </span>
                      <span className="accordion-tittle-inner">
                        <i className="flaticon-computer"></i>
                        <span style={{ marginLeft: "10px" }}>{course.lessons?.length} Ders</span>
                      </span>
                    </span>
                  </button>
                </div>
                <div
                  id={`collapse${index}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`heading${index}`}
                  data-bs-parent="#accordionExample"
                >
                  <div className={`accordion-body`}>
                    {course?.lessons?.map((lesson) => (
                      <div
                        className="course-curriculum-content d-sm-flex justify-content-between align-items-center"
                        key={lesson.id}
                      >
                        <span
                      className="popup-video"
                    >
                          <div className="course-curriculum-info">
                            <i className="flaticon-youtube"></i>
                            <h4>

                              {lesson.name}

                            </h4>

                          </div>
                        </span>
                          <div className="course-curriculum-meta">
                            <i className="flaticon-clock"></i>
                            <span>{lesson.time}</span>


                            {verify?.sections?.some(x => x.id === id) ? null : (
                              <span className="time">
                                <i className="flaticon-lock"></i>
                              </span>

                            )}

                          </div>
                        </div>
                    ))}
                      </div>
                </div>
                </div>
            ))}
              </div>
        </div>
        </div>
      </>
      );
};

      export default CourseCurriculam;
