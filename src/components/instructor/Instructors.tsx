"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import InstructorService from "@/services/instructorService";
import { GetAllInstructorPaginateResponse } from "@/models/response/Instructor/getAllInstructorPaginateResponse";
import Preloader from "../common/Preloader";
import ErrorComponent from "../errorPage/ErrorComponent";

const Instructors = () => {

    const [instructors, setInstructors] = useState<GetAllInstructorPaginateResponse>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    const instructorService = new InstructorService();

    useEffect(() => {
        const fetchInstructors = async () => {
            try {
                const response = await instructorService.getAll();
                setInstructors(response.data);
             

            } catch (error) {
                setError(error as Error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchInstructors();
    }, []);

    return (
        <section className="member-area pt-70 pb-90">
            {isLoading ? (
                <Preloader />
            ) : error ? (
                <ErrorComponent error={error} />
            ) : (

                <div className="container">
                    <div className="row">
                        {instructors?.items.map((item) => (
                            <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
                                <div className="member-main-wrapper2 mb-30">
                                    <div className="member-body text-center">
                                        <div className="member-item">
                                            <div className="member-thumb">
                                                <Link href={`/instructor-profile/${item.id}`}>
                                                    {item.imageUrl && (
                                                        <img
                                                            src={item.imageUrl}
                                                            style={{ width: "100%", height: "auto" }}
                                                            alt="member-img"
                                                        />
                                                    )}
                                                </Link>
                                            </div>
                                            <div className="member-content">
                                                <h4>
                                                    <Link href={`/instructor-profile/${item.id}`}>
                                                        {item.firstName} {item.lastName}
                                                    </Link>
                                                </h4>
                                                <span>{item.title}</span>
                                            </div>
                                            <div className="member-social">
                                                <ul>
                                                    <li key={item.id}>

                                                        <Link href={item.twitterUrl && (item.twitterUrl) || ""}>
                                                            <i className={"fab fa-twitter"}></i>
                                                        </Link>

                                                    </li>
                                                    <li key={item.id}>
                                                        <Link href={item.githubUrl && (item.githubUrl) || ""}>
                                                            <i className={"fab fa-github"}></i>
                                                        </Link>
                                                    </li>
                                                    <li key={item.id}>
                                                        <Link href={item.linkedinUrl && (item.linkedinUrl) || ""}>
                                                            <i className={"fab fa-linkedin"}></i>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="member-meta">
                                        <div className="member-detail course-link-color-6">
                                            <Link href={`/instructor-profile/${item.id}`}>
                                                <span className="me-2">Eğitmene Git</span>
                                                <span className="far fa-arrow-right"></span>
                                            </Link>
                                        </div>
                                        <div className="member-course">
                                            <i className="fal fa-tv"></i>
                                            <Link href="/course">
                                                <span>{item.sectionCount} Kurs</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

export default Instructors;


