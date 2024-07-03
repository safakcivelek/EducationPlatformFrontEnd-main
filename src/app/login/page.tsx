import LoginMain from '@/components/login/LoginMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const LoginPage = () => {
    return (
        <Wrapper>
            <main>
                <LoginMain/>
            </main>
        </Wrapper>
    );
};

export default LoginPage;