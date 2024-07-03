import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ZoomShapeImg from '../../../public/assets/img/teacher/zoom-shape-1.png';
import ZoomShapeImgTwo from '../../../public/assets/img/teacher/zoom-shape-2.png';
import ZoomShapeImgThere from '../../../public/assets/img/teacher/Zoom.png';

const ZoomSection = () => {
    return (
        <section className="zoom-area pt-120 pb-60">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-4 col-xl-5 col-lg-5 order-lg-2">
                        <div className="zoom-thumb position-relative">
                        <Image className="zoom-shape-01" src={ZoomShapeImg} style={{width:'auto', height:'auto'}} alt="img not found"/>
                        <Image className="zoom-shape-02" src={ZoomShapeImgTwo} style={{width:'auto', height:'auto'}} alt="img not found"/>
                        <Image className="zoom-thumb-main-img" src={ZoomShapeImgThere} style={{width:'auto', height:'auto'}} alt="img not found"/>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-5 col-lg-5 order-lg-1">
                        <div className="zoom-class-wrapper mb-60">
                            <div className="section-title mb-30">
                                <h2>Live Class From
                                    Anywhere Via <span className="down-mark-line-2"><Link href="#">Zoom</Link></span></h2>
                            </div>
                            <div className="zoon-class-text">
                                <p>Helping employees gain skills and providing career development often take a back seat
                                    to business priorities but workplace.</p>
                            </div>
                            <Link href="/zoom-class" className="edu-btn btn-transparent mt-25">Try free now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ZoomSection;