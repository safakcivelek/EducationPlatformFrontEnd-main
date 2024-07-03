"use client"
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

import SearchMain from '@/components/search/SearchMain';

const SearchPage = ({ params }: { params: { id: string } }) => {
    const id = params.id;

    return (
        <Wrapper>
            <main>
                <SearchMain/>
                {/* <Breadcrumb title="Kurslar" subTitle="Kurslar"/> 
                <SearchContent /> */}
            </main>
        </Wrapper>
    );
};

export default SearchPage;


