import ErrorPageMain from '@/components/404-page/ErrorPageMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const ErrorPage = () => {
    return (
        <Wrapper>
            <main>
                <ErrorPageMain/>
            </main>
        </Wrapper>
    );
};

export default ErrorPage;