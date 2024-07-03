"use client"
import InstructorProMain from '@/components/instructor-profile/InstructorProfileMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';
import Breadcrumb from '../../../components/common/breadcrumb/Breadcrumb';

const InstructorProfilePage = ({ params }: { params: { id: number } }) => {
    const id = params.id;

    return (
        <Wrapper>
            <main>
                <Breadcrumb title="Eğitmen Profili" subTitle="Eğitmenler"/> 
                <InstructorProMain id={id} />
            </main>
        </Wrapper>
    );
};

export default InstructorProfilePage;


