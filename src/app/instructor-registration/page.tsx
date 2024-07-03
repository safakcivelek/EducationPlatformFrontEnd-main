import InstructorRegistrationSection from '@/components/instructorRegistration/InstructorRegistrationSection';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const InstructorRegistrationPage = () => {
    return (
        <Wrapper>
            <main>
                <InstructorRegistrationSection/>
            </main>
        </Wrapper>
    );
};

export default InstructorRegistrationPage;