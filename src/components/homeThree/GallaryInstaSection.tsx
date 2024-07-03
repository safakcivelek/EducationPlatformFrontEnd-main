import gallery_data from '@/data/gallary-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const GallaryInstaSection = () => {
    return (
      <div className="gallery-area">
        <div className="swiper-containers">
          <div  className="swiper-wrappers gallery-inner">
            {gallery_data.slice(0, 5).map((item) => (
              <div key={item.id} className="swiper-slides gallery-single w-img">
               {item.image &&  <Image src={item.image} style={{width:'100%', height:'auto'}} alt="img not found"/>}
                <div className="gallery-link">
                  <Link href="#" className="gallery-insta">
                    <i className={item.icon}></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default GallaryInstaSection;