import StudentRegistrationSection from '@/components/studentRegistration/StudentRegistrationSection';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const StudentRegistrationPage = () => {
    return (
        <Wrapper>
            <main>
                <StudentRegistrationSection/>
            </main>
        </Wrapper>
    );
};

export default StudentRegistrationPage;