"use client"
import React from "react";
import courseStudentImage from "../../../public/assets/img/course/course-student.png";
import Image from "next/image";
import StudentProfileSidebar from "./StudentProfileSidebar";
import MyProfile from "./MyProfile";
import StudentProfileEnroll from "./StudentProfileEnroll";
import StudentProfileSurvey from "./StudentProfileSurvey";
import StudentUpdateProfile from "./StudentUpdateProfile";
import StudentSkill from "./StudentSkill";
import { useStudentProfile } from '../../contextApi/StudentProfileContext';
import MentorShipMain from "../zoom-class/MentorShipMain";
import StudentProfileAnnouncement from "./StudentProfileAnnouncement";
import CertificateCard from "./CertificateCards/CertificateCards";
import Certificates from "./Certificates";
import CampusEncounterMain from "../event/CampusEncounterMainPage";
import ExamMain from "./exam/ExamMain";
import Subscription from "./Subscription";



const StudentProfileSection = () => {
    const { studentProfile } = useStudentProfile();
    return (
        <div className="course-details-area pt-70 pb-100">
            <div className="container">
                <div className="student-profile-author pb-30">
                    <div className="student-profile-author-img">
                        <img
                            src={studentProfile?.imageUrl}
                            style={{ width: "100%", height: "auto" }}
                            alt="img not found"
                        />
                    </div>
                    <div className="student-profile-author-text">
                        <span>Merhaba,</span>
                        <h3 className="student-profile-author-name">{studentProfile?.firstName} {studentProfile?.lastName}</h3>

                        <div style={{ marginTop: '30px' }}>
                            <ul >
                                {studentProfile?.classRoomNames?.map((name, index) => (
                                    <h5  key={index}>{name}</h5>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <StudentProfileSidebar />
                    <div className="col-xl-9 col-lg-8">
                        <div className="student-profile-content">
                            <div className="tab-content" id="myTabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="announcement"
                                    role="tabpanel"
                                    aria-labelledby="announcement-tab"
                                >
                                    <h4 className="mb-25">Duyurular</h4>
                                    <div className="student-profile-content-fact">
                                        
                                        <div className="row">
                                         <StudentProfileAnnouncement />  
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="contact"
                                    role="tabpanel"
                                    aria-labelledby="contact-tab"
                                >
                                    <h4 className="mb-25">Eğitimler</h4>
                                    <div className="student-profile-content-fact">
                                        <StudentProfileEnroll /> 
                                        <div className="row">
                                          
                                        </div>
                                    </div>
                                </div>
                               
                                <div
                                    className="tab-pane fade"
                                    id="wishlist"
                                    role="tabpanel"
                                    aria-labelledby="wishlist-tab"
                                >
                                    <h4 className="mb-25">Yetenekler</h4>
                                    <div className="student-profile-wishlist">
                                        <div className="row">
                                            <StudentSkill />
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="tab-pane fade"
                                    id="reviews"
                                    role="tabpanel"
                                    aria-labelledby="reviews-tab"
                                >
                                    <h4 className="mb-25">Anketler</h4>
                                    <StudentProfileSurvey />
                                </div>

                                <div
                                    className="tab-pane fade"
                                    id="quiz"
                                    role="tabpanel"
                                    aria-labelledby="quiz-tab"
                                >
                                    <h4 className="mb-25">Sertifikalar</h4>
                                    <Certificates />
                                </div>
                                
                                 <div
                                    className="tab-pane fade"
                                    id="x"
                                    role="tabpanel"
                                    aria-labelledby="x-tab"
                                >
                                    <h4 className="mb-25">Mentör Oturumları</h4>
                                    <MentorShipMain />
                                </div> 
                              

                                <div
                                    className="tab-pane fade"
                                    id="history"
                                    role="tabpanel"
                                    aria-labelledby="history-tab"
                                >
                                    <h4 className="mb-25">Kampüs Buluşmaları</h4>
                                    {CampusEncounterMain() || null}
                                </div>


                                <div
                                    className="tab-pane fade"
                                    id="exam"
                                    role="tabpanel"
                                    aria-labelledby="exam-tab"
                                >
                                    <h4 className="mb-25">Sınavlar</h4>
                                    <ExamMain />
                                </div>

                                <div
                                    className="tab-pane fade"
                                    id="subscription"
                                    role="tabpanel"
                                    aria-labelledby="subscription-tab"
                                >
                                    <h4 className="mb-25">Abonelikler</h4>
                                    <Subscription />
                                </div>

                                <div
                                    className="tab-pane fade"
                                    id="setting"
                                    role="tabpanel"
                                    aria-labelledby="setting-tab"
                                >
                                    <h4 className="mb-25">Ayarlar</h4>
                                    <StudentUpdateProfile />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentProfileSection;

