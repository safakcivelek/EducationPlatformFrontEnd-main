import Link from 'next/link';
import BannerImage from '../../../../public/assets/img/banner/banner.png';
import Image from 'next/image';
import React, { ReactNode } from 'react';

interface BreadcrumbTwoProps {
    titleTwo: ReactNode;
    subTitleTwo: string;
  }

const BreadcrumbTwo: React.FC<BreadcrumbTwoProps> = ({ titleTwo, subTitleTwo }) => {
    return (
        <div className="banner-area faq position-relative">
         <div className="banner-img">
            <Image src={BannerImage} style={{width:'100%', height:'auto'}} alt="img not found"/>
         </div>
         <div className="container">
            <div className="row justify-content-center">
               <div className="course-title-breadcrumb breadcrumb-top">
                  <nav>
                     <ol className="breadcrumb">
                        <li className="breadcrumb-item white-color"><Link href="/">Home</Link></li>
                        <li className="breadcrumb-item white-color"><Link href="/faq-page">{subTitleTwo}</Link></li>
                     </ol>
                  </nav>
               </div>
               <div className="col-xl-8">
                  <div className="banner-tiitle-wrapper text-center">
                     <div className="banner-tittle">
                        <h2>{titleTwo}</h2>
                     </div>
                     <div className="banner-search-box">
                        <form action="#">
                           <div className="slider-faq-search">
                              <input type="text" placeholder="Search courses..."/>
                              <button type="submit"><i className="fal fa-search"></i></button>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    );
};

export default BreadcrumbTwo;