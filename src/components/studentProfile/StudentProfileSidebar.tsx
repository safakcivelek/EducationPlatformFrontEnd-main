"use client"

import { useRouter } from "next/navigation";
import React from "react";

const StudentProfileSidebar = () => {
    const router = useRouter();

    const handleButtonClick = () => {
        localStorage.removeItem('accessToken'); // localStorageden sil
        router.push('/login');
    };


    return (
        <div className="col-xl-3 col-lg-4">
            <div className="student-profile-sidebar mb-30">
                <ul className="nav nav-tabs" id="myTab" role="tablist">

                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link active"
                            id="announcement-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#announcement"
                            type="button"
                            role="tab"
                            aria-controls="announcement"
                            aria-selected="false"
                        >
                            <i className="fas fa-bullhorn"></i> Duyurular
                        </button>
                    </li>

                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link"
                            id="contact-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#contact"
                            type="button"
                            role="tab"
                            aria-controls="contact"
                            aria-selected="false"
                        >
                            <i className="fas fa-graduation-cap"></i> Eğitimler
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link"
                            id="wishlist-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#wishlist"
                            type="button"
                            role="tab"
                            aria-controls="wishlist"
                            aria-selected="false"
                        >
                            <i className="fas fa-lightbulb"></i> Yetenekler
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link"
                            id="reviews-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#reviews"
                            type="button"
                            role="tab"
                            aria-controls="reviews"
                            aria-selected="false"
                        >
                            <i className="fas fa-poll-h"></i> Anketler
                        </button>
                    </li>

                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link"
                            id="quiz-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#quiz"
                            type="button"
                            role="tab"
                            aria-controls="quiz"
                            aria-selected="false"
                        >
                            <i className="fas fa-certificate"></i> Sertifikalar
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
                            id="exam-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#exam"
                            type="button"
                            role="tab"
                            aria-controls="exam"
                            aria-selected="false"
                        >
                            <i className="fas fa-book-open"></i> Sınavlar
                        </button>
                    </li>

                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link"
                            id="subscription-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#subscription"
                            type="button"
                            role="tab"
                            aria-controls="subscription"
                            aria-selected="false"
                        >
                            <i className="fas fa-bell"></i> Abonelikler
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

export default StudentProfileSidebar;