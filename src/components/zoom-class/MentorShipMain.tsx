"use client" 
import React, { useEffect, useState } from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import Link from 'next/link';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import zoom_data from '@/data/zoom-class-data';
import Image from 'next/image';
import { GetAllMentorShipResponse } from '@/models/response/MentorShipSession/getAllMentorShipResponse';
import MentorShipSessionService from '@/services/mentorShipSessionService';
import Preloader from '../common/Preloader';

const MentorShipMain:React.FC = () => {
    const [value, setValue] = useState<Date>(new Date());

  const [mentorShip, setMentorShip] = useState<GetAllMentorShipResponse>(); 
  const [loading, setLoading] = useState(true); 

  const mentor: MentorShipSessionService = new MentorShipSessionService();
  useEffect(() => {
    mentor.getAll().then((response) => {
     setMentorShip(response.data);
     setLoading(false);
   });
  }, []);

    if (loading) {
        return <Preloader/>

    }
   

    return (
        <main>
            <section className="zoom-class-area pt-20 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10 col-lg-12 col-md-12">
                            {
                                mentorShip?.items.map((item)=>(
                                    <div key={item.id} className="zoom-class-main-wrapper mb-30">
                                    <div className="zoom-class-thumb w-img">
                                      
                                      {<img src={"https://i.imgur.com/LpLA84m.jpg"}  alt="img not found" />}
                                    </div>
                                    <div className="zoom-class-item">
                                        <div className="zooom-class-tittle">
                                                <h3><Link href={`https://meet.google.com/fqz-xsgq-ovf`}>{item.title}</Link></h3>
                                        </div>
                                        <div className="xzoom-class-detalis">
                                            <div className="class-list-date d-flex align-items-center">
                                                    <i className="flaticon-calendar"></i><span>
                                                        Tarih : &nbsp;
                                                        {
                                                             new Date(item.date).toLocaleDateString('tr-TR', {
                                                                day: '2-digit', month: '2-digit', year: 'numeric'
                                                            })
                                                        }
                                                    </span>
                                            </div>
                                           
                                            <div className="class-list-time d-flex align-items-center">
                                                <i className="flaticon-wall-clock"></i><span>Takvim : {item.schedule}</span>
                                            </div>
                                            <div className="class-metting">
                                                    <span>Toplantı ID:<Link href="https://meet.google.com/fqz-xsgq-ovf" target='_blank'>{item.meetingId}</Link></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))
                            }
                        </div>
                       
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MentorShipMain;