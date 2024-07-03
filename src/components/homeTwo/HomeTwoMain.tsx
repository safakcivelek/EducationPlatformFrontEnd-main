import React from 'react';
import HeroSectionTwo from './HeroSectionTwo';
import CounterSection from './CounterSection';
import AboutSection from './AboutSection';
import dynamic from 'next/dynamic';
import PartnerSection from './PartnerSection';
import FeatureSection from './FeatureSection';
import TeacherSection from './TeacherSection';
import ZoomSection from './ZoomSection';
import SkillSection from './SkillSection';
import BlogSection from './BlogSection';
import CourseTabTwo from '../Elements/Tabs/CourseTabTwo';
const CategorySlider = dynamic(() => import('../Elements/Slider/CategorySlider'), {
    ssr: false
  })


const HomeTwoMain = () => {
    return (
        <div>
            <HeroSectionTwo/>
            <CounterSection/>
            <AboutSection/>
            <CategorySlider/>
            <CourseTabTwo/>
            {/* <PartnerSection /> */}
            <FeatureSection/>
            <TeacherSection/>
            {/* <ZoomSection/> */}
            {/* <SkillSection /> */}
            <BlogSection />
        </div>
    );
};

export default HomeTwoMain;