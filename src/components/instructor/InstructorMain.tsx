import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import Instructors from './Instructors';


const InstructorMain = () => {
    return (
        <>
            <Breadcrumb title="Eğitmenler" subTitle="Eğitmenler" /> 
            <Instructors />
        </>
    );
};

export default InstructorMain;