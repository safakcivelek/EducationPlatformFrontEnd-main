import React from 'react';
import Link from 'next/link';
import UniversityCardIconOne from '@/svg/university-card-icon-one';
import { universityCardType } from '@/interFace/interFace';
import UniversityCardIconTwo from '@/svg/university-card-icon-two';
import UniversityCardIconThree from '@/svg/university-card-icon-three';


const UniversityCardSection = () => {
    const UniversityCardData:universityCardType[]=[
        {
            id:1,
            cardIcon:UniversityCardIconOne,
            title:"Undergraduate",
            description:'Higher education is designed for career professionals seeking'
        },
        {
            id:2,
            cardIcon:UniversityCardIconTwo,
            title:"Postgraduate",
            description:'Higher education is designed for career professionals seeking'
        },
        {
            id:3,
            cardIcon:UniversityCardIconThree,
            title:"Research Fellow",
            description:'Higher education is designed for career professionals seeking'
        },
    ]
    return (
        <div className="university-card">
        <div className="container">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="university-main-wraper d-flex align-items-center">
                        <div className="university-course-box">
                            <div className="university-card-text">
                                <p>Discover yourself</p>
                                <h3>Earn Your Degree from <span>Tobeto</span></h3>
                                <Link href="/course" className="edu-six-btn">Kursları Görüntüle</Link>
                            </div>
                        </div>
                        {
                            UniversityCardData.map((item)=>(
                                <div key={item.id} className="university-card-wrapper">
                                <div className="university-card-icon">
                                   {item.cardIcon && <item.cardIcon/>}
                                </div>
                                <div className="university-card-content">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default UniversityCardSection;