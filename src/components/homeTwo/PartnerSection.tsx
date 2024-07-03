import React from 'react';
import pertnerImage from '../../../public/assets/img/bg/partner.png';
import pertnerImageTwo from '../../../public/assets/img/brand/partner-01.png';
import pertnerImageThere from '../../../public/assets/img/brand/partner-02.png';
import pertnerImageFour from '../../../public/assets/img/brand/partner-03.png';
import pertnerImageFive from '../../../public/assets/img/brand/partner-04.png';
import pertnerImageSix from '../../../public/assets/img/brand/partner-05.png';
import pertnerImageSeven from '../../../public/assets/img/brand/partner-06.png';
import pertnerImageEight from '../../../public/assets/img/brand/partner-07.png';
import pertnerImageNine from '../../../public/assets/img/brand/partner-08.png';
import pertnerImageTen from '../../../public/assets/img/brand/partner-09.png';
import pertnerImageEleven from '../../../public/assets/img/brand/partner-10.png';
import Image from 'next/image';

const PartnerSection = () => {
    return (
        <div className="patner-area pt-110 pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-4 col-md-4">
                        <div className="partner-box mb-30">
                            <div className="partner-thumb d-none d-sm-block">
                                <Image src={pertnerImage} style={{width:'auto', height:'auto'}} alt="partner-png"/>
                            </div>
                            <div className="section-title mb-30">
                                <h2>Our
                                    <span className="down-mark-line-2">Global</span>Honorable Partners
                                </h2>
                            </div>
                            <div className="Partner-content">
                                <p>Global partners has been Publish the course you want, in the way you want always have
                                    of control.</p>
                                <div className="partner-text">
                                    <p> <span>9,500</span>+businesses and students
                                        around the world</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-8 col-md-8">
                        <div className="partner-wrapper">
                            <div className="singel-partner">
                            <Image src={pertnerImageTwo} style={{width:'100%', height:'auto'}} alt="img not found"/>
                            </div>
                            <div className="singel-partner">
                            <Image src={pertnerImageThere} style={{width:'100%', height:'auto'}} alt="img not found"/>
                            </div>
                            <div className="singel-partner">
                            <Image src={pertnerImageFour} style={{width:'100%', height:'auto'}} alt="img not found"/>
                            </div>
                            <div className="singel-partner">
                            <Image src={pertnerImageFive} style={{width:'100%', height:'auto'}} alt="img not found"/>
                            </div>
                            <div className="singel-partner">
                            <Image src={pertnerImageSix} style={{width:'100%', height:'auto'}} alt="img not found"/>
                            </div>
                            <div className="singel-partner">
                            <Image src={pertnerImageSeven} style={{width:'100%', height:'auto'}} alt="img not found"/>
                            </div>
                            <div className="singel-partner">
                            <Image src={pertnerImageEight} style={{width:'100%', height:'auto'}} alt="img not found"/>
                            </div>
                            <div className="singel-partner">
                            <Image src={pertnerImageNine} style={{width:'100%', height:'auto'}} alt="img not found"/>
                            </div>
                            <div className="singel-partner">
                            <Image src={pertnerImageTen} style={{width:'100%', height:'auto'}} alt="img not found"/>
                            </div>
                            <div className="singel-partner">
                            <Image src={pertnerImageEleven} style={{width:'100%', height:'auto'}} alt="img not found"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnerSection;