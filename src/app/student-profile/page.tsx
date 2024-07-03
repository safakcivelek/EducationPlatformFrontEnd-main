"use client"

import React from 'react';
import { useTokenUser } from '../../hooks/userHook/tokenUser';
import { StudentProfileProvider } from '../../contextApi/StudentProfileContext';
import Wrapper from '@/layout/DefaultWrapper';
import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import StudentProfileMain from '../../components/studentProfile/StudentProfileMain';



const StudentProfilePage = () => {

    return (
        <StudentProfileProvider>
            <Wrapper>
                <main>
                    <Breadcrumb title="Profil" subTitle="" />
                    <StudentProfileMain />
                </main>
            </Wrapper>
        </StudentProfileProvider>
    );
};

export default StudentProfilePage;