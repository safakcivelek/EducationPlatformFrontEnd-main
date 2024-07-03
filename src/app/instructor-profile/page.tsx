"use client"
import InstructorMain from '@/components/instructor-profile/InstructorMain';
import { InstructorProfileProvider } from '@/contextApi/InstructorProfileContext';
import Wrapper from '@/layout/DefaultWrapper';
import { parseJwt } from '@/utils/parseJWT';
import React from 'react';
import Breadcrumb from '../../components/common/breadcrumb/Breadcrumb';
import { useTokenUser } from '@/hooks/userHook/tokenUser';

const InstructorPage = () => {

    const user = useTokenUser();

    return (

        <InstructorProfileProvider userId={user.userId}>
            <Wrapper>
                <main>
                    <Breadcrumb title="Profil" subTitle="Profilim" />
                    <InstructorMain />
                </main>
            </Wrapper>

        </InstructorProfileProvider>


    );
};

export default InstructorPage;