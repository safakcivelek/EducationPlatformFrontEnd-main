import React from 'react';
import HeroSection from './HeroSection';
import TopCategorySection from './TopCategorySection';
import FeatureSection from './FututreSection';
import dynamic from 'next/dynamic';
import CourseTab from '../Elements/Tabs/CourseTab';
const BrandSlider = dynamic(() => import('../Elements/Slider/BrandSlider'), {
    ssr: false
  })

const HomeMain = () => {
    return (
        <div>
            <HeroSection />
            <TopCategorySection/>            
            <CourseTab/>
            <FeatureSection/>
            <BrandSlider/>
        </div>
    );
};

export default HomeMain;