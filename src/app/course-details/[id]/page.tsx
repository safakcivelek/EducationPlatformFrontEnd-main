import CourseDetailsMain from '@/components/course-details/CourseDetailsMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';
import Breadcrumb from '../../../components/common/breadcrumb/Breadcrumb';

const CourseDetails = ({params}:{params:{id:string}}) => {
const id = params.id;

    return (
        <Wrapper>
            <main>
                 <Breadcrumb title="Kurslar" subTitle="Kurslar" /> 
                 <CourseDetailsMain id={id}/>
            </main>
        </Wrapper>
    );
};

export default CourseDetails;