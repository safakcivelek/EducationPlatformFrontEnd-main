
"use client"

import React from 'react';
import Link from 'next/link';
import feedbackImg from '../../../public/assets/img/shape/feedback-img.png';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import events_data from '@/data/events-data';
const TestimonialSliderThree = dynamic(() => import('../Elements/Slider/TestimonialSliderThree'), {
    ssr: false
})

const EventSection = () => {
    return (
        <div className="event-area pt-110 pb-90">
            <div className="event-shape-wrapper position-relative">
                <div className="event-shape">
                    <Image src={feedbackImg} style={{ width: 'auto', height: 'auto' }} alt="img not found" />
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-12">
                        <div className="section-title mb-45">
                            <h2>Current <span className="down-mark-line-2">Events</span></h2>
                        </div>
                        {
                            events_data.slice(0, 3).map((item) => (
                                <div key={item.id} className="current-event-box mb-30">
                                    <div className="current-event-date d-flex position-relative">
                                        <div className="event-date-wrapper">
                                            <span className="event-date">{item.eventDate}</span>
                                            <span className="event-month">{item.eventMonth}</span>
                                        </div>
                                        <div className="event-tour">
                                            <div className="event-box-text">
                                                <h3><Link href={`/event-details/${item.id}`}>{item.title}</Link></h3>
                                                <span><i className="fal fa-clock"></i>{item.clock}</span>
                                                <span><i className="flaticon-place"></i>{item.palce}</span>
                                            </div>
                                            <Link href={`/event-details/${item.id}`} className="event-arrow"><i className="fal fa-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                    <div className="col-xl-6 col-lg-6 col-12">
                        <TestimonialSliderThree />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventSection;