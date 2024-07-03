"use client"
import React from "react";
import Image from "next/image";
import { useInstructorProfile } from "@/contextApi/InstructorProfileContext";
import InstructorProfileSidebar from "./InstructorProfileSidebar";
import InstructorProfileEnroll from "./InstructorProfileEnroll";
import InstructorUpdateProfile from "./InstructorUpdateProfile";
import ZoomClassMain from "../zoom-class/MentorShipMain";
import AddSectionPage from "./addSection/AddSectionPage";
import CampusEncounterMain from "../event/CampusEncounterMainPage";




const InstructorProfileSection = () => {
    const { instructorProfile } = useInstructorProfile();
    return (
        <div className="course-details-area pt-70 pb-100">
            <div className="container">
                <div className="student-profile-author pb-30">
                    <div className="student-profile-author-img">
                        <img
                            src={instructorProfile?.imageUrl}
                            style={{ width: "100%", height: "auto" }}
                            alt="img not found"
                        />
                    </div>
                    <div className="student-profile-author-text">
                        <span>Merhaba,</span>
                        <h3 className="student-profile-author-name">{instructorProfile?.firstName} {instructorProfile?.lastName}</h3>

                    </div>
                </div>
                <div className="row">
                    <InstructorProfileSidebar />
                    <div className="col-xl-9 col-lg-8">
                        <div className="student-profile-content">
                            <div className="tab-content" id="myTabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="contact"
                                    role="tabpanel"
                                    aria-labelledby="contact-tab"
                                >
                                    <h4 className="mb-25">Eğitimlerim</h4>
                                    <div className="student-profile-content-fact">
                                        <InstructorProfileEnroll /> 
                                        <div className="row">
                                          
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="as"
                                    role="tabpanel"
                                    aria-labelledby="as-tab"
                                >
                                    <h4 className="mb-25">Eğitim Ekle</h4>
                                    <AddSectionPage />
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
                                    id="x"
                                    role="tabpanel"
                                    aria-labelledby="x-tab"
                                >
                                    <h4 className="mb-25">Mentör Oturumları</h4>
                                    <ZoomClassMain />
                                </div> 
                               
                                <div
                                    className="tab-pane fade"
                                    id="setting"
                                    role="tabpanel"
                                    aria-labelledby="setting-tab"
                                >
                                    <h4 className="mb-25">Ayarlar</h4>
                                    <InstructorUpdateProfile />
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorProfileSection;

