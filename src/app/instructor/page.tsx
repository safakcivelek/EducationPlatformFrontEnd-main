"use client"
import InstructorMain from '@/components/instructor/InstructorMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const InstructorPage = () => {
    return (
        <Wrapper>
            <main>
                <InstructorMain/>
            </main>
        </Wrapper>
    );
};

export default InstructorPage;