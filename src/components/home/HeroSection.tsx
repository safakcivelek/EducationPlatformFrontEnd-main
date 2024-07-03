"use client"
import Link from "next/link";
import shapeImg from "../../../public/assets/img/shape/shape-03.png";
import shapeImgTwo from "../../../public/assets/img/shape/shape-01.png";
import shapeImgThere from "../../../public/assets/img/shape/shape-02.png";
import shapeImgFour from "../../../public/assets/img/shape/slider-shape-6.png";
import shapeImgFive from "../../../public/assets/img/shape/shape-04.png";
import sliderCardImgOne from "../../../public/assets/img/shape/slider-card-1.png";
import sliderCardImgTwo from "../../../public/assets/img/shape/slider-card-2.png";
import sliderCardImgThere from "../../../public/assets/img/shape/slider-card-3.png";
import sliderCardImgFour from "../../../public/assets/img/shape/slider-card-4.png";
import Image from "next/image";
import React, { useEffect, useState } from 'react';
import { useTokenUser } from "@/hooks/userHook/tokenUser";
import StudentService from "@/services/studentService";
import { GetAllStudentsPaginatedResponse } from "@/models/response/Student/getAllStudentsResponse";

const HeroSection = () => {
    const studentService = new StudentService();

    const [student, setStudent] = useState<GetAllStudentsPaginatedResponse>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    const [userName, setUserName] = useState('');
    const userNameToken = useTokenUser();
    
    useEffect(() => {
        if (userNameToken.userName) {         
            setUserName(userNameToken.userName);
        }
        const fetchStudent = async () => {
            setIsLoading(true);
            try {
                const response = await studentService.getAll();
                setStudent(response.data);
            } catch (error) {
                setError(error as Error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchStudent();
    }, []);

    return (
        <section
            className="slider-area hero-height position-relative fix"
            style={{ background: "url(assets/img/slider/baris333.jpg)" }}
        >
            <Image className="shape-3 d-none d-xxl-block" src={shapeImg} style={{ width: 'auto', height: 'auto' }} alt="img not found" />
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-9">
                        <div className="hero-text pt-95">
                            <h5>Platform</h5>

                            <h2>
                                {userName ? `Hoşgeldin, ${userName}` : 'Tobeto Eğitim Platformuna Hoşgeldiniz'}
                                <span className="down-mark-line"></span>
                            </h2>
                            <p>
                                Yeni nesil öğrenme deneyimi ile Tobeto kariyer yolculuğunda senin yanında!
                            </p>
                            <div className="hero-btn">
                                <Link href="/course" className="edu-btn">
                                    Kursları Görüntüle
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="hero-right position-relative">
                            <Image data-depth="0.2" className="shape shape-1" src={shapeImgTwo} style={{ width: 'auto', height: 'auto' }} alt="shape" />
                            <Image data-depth="0.2" className="shape-2" src={shapeImgThere} style={{ width: 'auto', height: 'auto' }} alt="shape" />
                            <Image data-depth="0.2" className="shape-6" src={shapeImgFour} style={{ width: 'auto', height: 'auto' }} alt="shape" />
                            <div className="shape-4">
                                <Image className="" src={shapeImgFive} style={{ width: 'auto', height: 'auto' }} alt="shape" />
                                <h5 className="hero-shape-text">En İyi Eğitmenler</h5>
                            </div>
                            <div className="shape-5">
                                <div className="course-card">
                                    {student?.items.slice(0,4).map((student)=>(
                                        <img key={student.id } src={student.imageUrl} style={{ width: '38px', height: '38px' }} alt="img not found" />
                                    ))}
                                    <span>
                                        <i className="far fa-plus"></i>
                                    </span>
                                </div>
                                <h5>
                                    Dünya çapında <span>{student?.count}00+</span> öğrenci
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
