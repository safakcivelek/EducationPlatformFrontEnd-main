import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import courseInstractorImg from '../../../public/assets/img/course/course-instructors.png';
import Image from 'next/image';
import SectionService from '@/services/sectionService';
import { getSectionResponse } from '@/models/response/Section/getSectionResponse';
import { useSectionDetail } from '@/hooks/courseHook/courseDetail';


export interface CourseDetailsInstructorProps {
    id: string;
}

const CourseDetailsInstructor: React.FC<CourseDetailsInstructorProps> = ({ id }) => {

    const { sections, error } = useSectionDetail(id!);


    return (
        <div className="course-instructors">
            <h3>instructors</h3>
            {sections?.instructors?.map((instructor) => (
                <><div key={instructor.id} className="instructors-heading">
                    <div className="instructors-img w-img">
                        <Link href={`/instructor-profile/${instructor.id}`}><img src={instructor.imageUrl} style={{ width: '100%', height: 'auto' }} alt="img not found" /></Link>
                    </div>

                    <div className="instructors-body">
                        <h5><Link key={instructor.id} href={`/instructor-profile/${instructor.id}`}>{instructor.name}</Link></h5>
                        <span>{instructor.title}</span>
                        <div className="intructors-review">

                        </div>
                        <div className="instructors-footer">

                            <i className="flaticon-computer"></i>
                            <span>{sections?.courses?.length}</span>
                        </div>
                    </div>

                </div><div className="intructors-content">

                        <p>

                            {instructor.biography.length > 195 ?
                                instructor.biography.slice(0, 195) + "..." :
                                instructor.biography}
                        </p>

                    </div></>
            ))}
        </div>
    );
}

export default CourseDetailsInstructor;

