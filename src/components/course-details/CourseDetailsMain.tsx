"use client";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import CourseCurriculam from "./CourseCurriculam";
import CourseDetailsMeta from "./CourseDetailsMeta";
import CourseDetailsInstructor from "./CourseDetailsInstructor";
import CourseDetailsSidebar from "./CourseDetailsSidebar";
import SectionService from "@/services/sectionService";
import { getSectionResponse } from "@/models/response/Section/getSectionResponse";
import Link from "next/link";
import Preloader from "../common/Preloader";
import { useSectionDetail } from "@/hooks/courseHook/courseDetail";
import ErrorComponent from "../errorPage/ErrorComponent";

export interface idType {
  id: string;
}
const CourseDetailsMain = ({ id }: idType) => {


  const { sections,error,setError,isLoading,setLoading} = useSectionDetail(id!);


  return (
    <main>
      {isLoading ? (
        <Preloader />
      ) : error ? (
        <ErrorComponent error={error} />
      ) : (
        <section className="course-detalis-area pb-90">
          <div className="container">
            <div className="row">
              <div className=" col-xxl-8 col-xl-8">
                <div className="course-detalis-wrapper mb-30">
                  <div className="course-heading mb-20">
                    <h2>{sections?.name}</h2>
                  </div>
                  <CourseDetailsMeta id={id} />

                  <div className="course-description pt-45 pb-30">
                    <div className="course-Description">
                      <h4>Açıklama</h4>
                    </div>
                    <p>
                      {sections?.description}
                      <br />
                      buranın devamı fake
                      <br />
                      This course has been designed by two professional Data Scientists so that we can share our knowledge and help you learn complex theory, algorithms, and coding libraries in a simple way. We will walk you step-by-step into the World of Machine Learning. With every tutorial, you will develop new skills and improve your understanding of this challenging yet lucrative sub-field of Data Science.
                    </p>
                  </div>

                  <CourseCurriculam id={id} />
                  <CourseDetailsInstructor id={id} />



                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-8 col-md-8">
                <CourseDetailsSidebar id={id} />
              </div>
            </div>
          </div>
        </section>
      )};
    </main>
  );
};

export default CourseDetailsMain;


