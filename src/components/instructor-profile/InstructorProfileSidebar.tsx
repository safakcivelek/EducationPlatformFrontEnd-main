"use client"

import { useRouter } from "next/navigation";
import React from "react";

const InstructorProfileSidebar = () => {
    const router = useRouter();

    const handleButtonClick = () => {
        localStorage.removeItem('accessToken');
        router.push('/login');
    };


    return (
        <div className="col-xl-3 col-lg-4">
            <div className="student-profile-sidebar mb-30">
                <ul className="nav nav-tabs" id="myTab" role="tablist">

                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link active"
                            id="contact-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#contact"
                            type="button"
                            role="tab"
                            aria-controls="contact"
                            aria-selected="false"
                        >
                            <i className="fas fa-graduation-cap"></i> Eğitimlerim
                        </button>
                    </li>

                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link"
                            id="as-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#as"
                            type="button"
                            role="tab"
                            aria-controls="as"
                            aria-selected="false"
                        >
                            <i className="fas fa-plus-circle"></i> Eğitim Ekle
                        </button>
                    </li>

                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link"
                            id="history-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#history"
                            type="button"
                            role="tab"
                            aria-controls="history"
                            aria-selected="false"
                        >
                            <i className="fas fa-users"></i> Kampüs Buluşmaları
                        </button>
                    </li>

                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link"
                            id="x-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#x"
                            type="button"
                            role="tab"
                            aria-controls="x"
                            aria-selected="false"
                        >
                            <i className="fas fa-tv"></i> Mentör Oturumları
                        </button>
                    </li>


                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link"
                            id="setting-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#setting"
                            type="button"
                            role="tab"
                            aria-controls="setting"
                            aria-selected="false"
                        >
                            <i className="fas fa-cog"></i> Ayarlar
                        </button>
                    </li>

                    <li className="nav-item" role="presentation">
                        <button onClick={handleButtonClick}
                            className="nav-link"
                            id="logout-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#logout"
                            type="button"
                            role="tab"
                            aria-controls="logout"
                            aria-selected="false"
                        >
                            <i className="fas fa-sign-out-alt"></i> Çıkış Yap
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default InstructorProfileSidebar;