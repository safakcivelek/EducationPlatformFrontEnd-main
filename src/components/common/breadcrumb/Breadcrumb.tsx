import React from 'react';
import Link from 'next/link';
import bgImage from '../../../svg/background.svg';

interface PropsData {
    title: string | undefined,
    subTitle: string | undefined
}

const Breadcrumb = ({ title, subTitle }: PropsData) => {
    return (
        <>
        
        <div className="hero-arera course-item-height" style={{ backgroundImage: `url(${bgImage.src})`, backgroundSize: 'cover', backgroundPosition: 'center', marginTop: "100px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-course-1-text">
                                <h2>{title}</h2>
                            </div>
                            <div className="course-title-breadcrumb">
                                <nav>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link href="/">Anasayfa</Link></li>
                                        <li className="breadcrumb-item"><span>{subTitle}</span></li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Breadcrumb;