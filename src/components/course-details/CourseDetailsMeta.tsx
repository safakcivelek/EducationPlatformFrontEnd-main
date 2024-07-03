import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Preloader from '../common/Preloader';
import { useSectionDetail } from '@/hooks/courseHook/courseDetail';


export interface CourseDetailsMetaProps {
  id: string;
}

const CourseDetailsMeta: React.FC<CourseDetailsMetaProps> = ({ id }) => {


  const { sections, error } = useSectionDetail(id!);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('tr-TR', options);
};

  return (
    <div className="course-detelis-meta">
      <div className="course-meta-wrapper border-line-meta">
        {sections?.instructors?.map((instructor) => (
          <>
          <div key={instructor.id} className="course-meta-img">
            <Link href={`/instructor-profile/${instructor.id}`}> <img src={instructor.imageUrl} style={{ width: '75px', height: 'auto' }} alt="course-meta" /></Link>
          </div>
          <div className="course-meta-text">
            <span>Hazırlayan</span>
            <h6><Link href={`/instructor-profile/${instructor.id}`}>{instructor.name}</Link></h6>
          </div>
          </>
        ))}

      </div>
      <div className="course-update border-line-meta">
        <p>Oluşturulma Tarihi</p>
        <span>{sections?.createdDate ? formatDate(sections?.createdDate):"00/00/0000"}</span>
      </div>
      <div className="course-category">
        <span><Link href={`/category-sections/${sections?.categoryId}`}>{sections?.categoryName}</Link></span>
      </div>
    </div>

  );
};

export default CourseDetailsMeta;



