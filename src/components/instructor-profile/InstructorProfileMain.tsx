"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from "@nextui-org/react";
import '../../../public/assets/css/tooltipBar.css';
import Preloader from "../common/Preloader";
import { useInstructorDetail } from "@/hooks/userInstructorDetail";
// importlar farklı bir alanda tutulabilir...


export interface IdProps {
    id?: number;
}
const InstructorProMain = ({ id }: IdProps) => {
    const { instructorDetail, isLoading, error } = useInstructorDetail(id!);

    // Toplam kurs sayısını hesaplar
    const totalCourseCount = instructorDetail?.sections.reduce((total, section) => {
        return total + parseInt(section.courseCount);
    }, 0);

    return (
        <main>
            {isLoading ? (
                <Preloader />
            ) : error ? (
                <div className="error-wrapper">
                    <div className="error-container">
                        <p className="error-message">Hata Oluştu: {error.message}</p>
                        <p>Lütfen daha sonra tekrar deneyin veya destek ekibimizle iletişime geçin.</p>
                        <div className="back-button">
                            <button onClick={() => window.history.back()}><b>Önceki Sayfaya Dön</b></button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="course-detalies-area pt-40 pb-100 mt-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 mt-50 mr-50">
                                <div className="mb-40">
                                    {instructorDetail?.imageUrl &&
                                        <img
                                            src={instructorDetail?.imageUrl}
                                            style={{
                                                width: "100%",
                                                height: "auto",
                                                borderRadius: "300px",
                                            }}
                                            alt="img not found"
                                        />}
                                </div>

                                <div className="sign-user-social">
                                
                                    <Link href={instructorDetail?.linkedinUrl || "/instructor"}>
                                        <span>
                                            <FontAwesomeIcon icon={faLinkedin} />
                                            Linkedin
                                        </span>
                                    </Link>
                                </div>
                                <br />
                                < div className="sign-user-social">
                                    <Link href={instructorDetail?.githubUrl || "/instructor"}>
                                        <span>
                                            <FontAwesomeIcon icon={faGithub} />
                                            Github
                                        </span>
                                    </Link>
                                </div>
                                <br />
                                <div className="sign-user-social">
                                    <Link href={instructorDetail?.twitterUrl || "/instructor"}>
                                        <span><FontAwesomeIcon icon={faTwitter} />
                                            Twitter
                                        </span>
                                    </Link>
                                </div>
                                <br />
                            </div>
                            <div className="col-xl-8 col-lg-9 mt-50">
                                <div className="course-detelies-wrapper">
                                    <div className="course-detiles-tittle mb-30">
                                        <h3>{instructorDetail?.firstName} {instructorDetail?.lastName}</h3>
                                        <span>{instructorDetail?.title}</span>
                                    </div>
                                    <div className="course-detiles-meta">
                                        <div className="total-course">
                                            <span>Toplam Eğitim</span>
                                            <label><img
                                                src="https://eduman-react.vercel.app/_next/static/media/lesson.a6c90236.svg"
                                                style={{ width: "16px", height: "auto" }}
                                                alt="course-img"
                                            /> ({instructorDetail?.sections.length})</label>
                                        </div>
                                        <div className="student course">
                                            <span>Öğrenciler</span>
                                            <label><i className="fal fa-graduation-cap"></i> 50</label>
                                        </div>
                                        <div className="total-course">
                                            <span>Katılma Tarihi</span>

                                            <label>
                                                <i className="fal fa-calendar-alt"></i> {instructorDetail?.createdDate ? new Date(instructorDetail.createdDate).toLocaleDateString() : ''}
                                            </label>
                                        </div>

                                        <div className="course-details-action">
                                            <div className="course-follow">
                                                <Link href="#!" className="edu-follow-btn">
                                                    Takip
                                                </Link>
                                            </div>
                                            <div className="course-share">
                                                <Link href="#" className="share-btn">
                                                    <i className="far fa-share-alt"></i>
                                                </Link>
                                            </div>
                                        </div>


                                    </div>
                                    <div className="course-bio-text pt-45 pb-20">
                                        <h3>Hakkımda</h3>
                                        <p>
                                            {instructorDetail?.biography}
                                        </p>
                                    </div>
                                    <div className="my-course-info">
                                        <h3>Eğitimler</h3>
                                    </div>
                                    <div className="row">
                                        {instructorDetail?.sections.map((section) => (
                                            <div
                                                key={String(section.id)}
                                                className="col-xl-6 col-lg-6 col-md-6 col-md-6"
                                            >
                                                {/* {border - color:#6f19c5; border-width: 2px;} */}
                                                <div className="eduman-course-main-wrapper mb-30">
                                                    <div className="eduman-course-img w-img">
                                                        <Link href={`/course-details/${section.id}`}>
                                                            <img src={section.imageUrl} style={{ width: "100%", height: "auto" }} alt="course-img" />
                                                        </Link>
                                                    </div>
                                                    <div className="eduman-course-wraper">
                                                        <div className="category-color">
                                                           {section.categoryName}
                                                          
                                                        </div>
                                                        <div className="eduman-course-text ">
                                                            <h3 >
                                                                <Tooltip className="tooltip-bar" content={section.name} placement="top-end" >
                                                                    <Link href={`/course-details/${section.id}`}>{section.name}</Link>
                                                                </Tooltip>
                                                            </h3>
                                                        </div>
                                                        {/* Bu alanı kullanalım Mı? */}
                                                        <div className="eduman-course-meta">
                                                            <div className="eduman-course-tutor">
                                                                <Link href="/instructor-profile">
                                                                    <img
                                                                        src={instructorDetail?.imageUrl}
                                                                        style={{ width: "28px", height: "28px", borderRadius: "150px" }}
                                                                        alt="img not found"
                                                                    />
                                                                </Link>
                                                                <Link href={`/instructor-profile/${instructorDetail.id}`}>
                                                                    <span>{instructorDetail?.firstName} {instructorDetail?.lastName}</span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="eduman-course-footer">

                                                        <div className="course-link-color-6">
                                                            {/* Geçici süre pasif */}
                                                            <Link href={`/course-details/${section.id}`}>
                                                                <span className="me-2">Eğitime Git</span>
                                                                <span className="far fa-arrow-right "></span>
                                                            </Link>
                                                        </div>
                                                        <div className="course-lessson-svg">

                                                            <span className="ms-2">
                                                                <i className="fal fa-tv"></i> {section?.courseCount} {"Kurs"}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )};
        </main>
    );
};

export default InstructorProMain;