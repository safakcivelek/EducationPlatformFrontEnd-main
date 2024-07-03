
"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { GetAllCampusEncounterResponse } from "../../models/response/CampusEncounter/getAllCampusEncounterResponse";
import CampusEncounterService from "../../services/campusEncounterService";
import Preloader from "../common/Preloader";



const CampusEncounterMain = () => {

    const [campusEncounter, setCampusEncounters] = useState<GetAllCampusEncounterResponse>();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const campusEncounterService = new CampusEncounterService();


    useEffect(() => {
        const fetchCampusEncounters = async () => {
            try {
                setIsLoading(true);
                const response = await campusEncounterService.getAll();
                setCampusEncounters(response.data);

            } catch (error) {
                setError(error as Error);
            } finally {
                setIsLoading(false);
            }

        };

        fetchCampusEncounters();
    }, []);


    if (isLoading) {
        return <Preloader />;
    }

    if (error) {
        return console.log(error.message);
    }

    // Tarih ve saat bilgilerini formatlama fonksiyonu
    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'long', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('tr-TR', options);
    };

    const formatTime = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit' };
        return new Date(dateString).toLocaleTimeString('tr-TR', options);
    };

    // Etkinlik durumunu kontrol eden fonksiyon
    const getEventStatus = (startDateTime: string) => {
        const eventDate = new Date(startDateTime);
        const now = new Date();
        return eventDate < now ? "Tamamlandı" : "Bekleniyor";
    };

    // Etkinlik durumuna göre class ismini döndüren fonksiyon
    const getButtonClass = (startDateTime: string) => {
        const eventDate = new Date(startDateTime);
        const now = new Date();
        return eventDate < now ? "get-btn" : "get-btn2";
    };

    return (

        <main>

            <div className="event-ara  pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-12 col-lg-7">
                            {campusEncounter?.items.map((item) => (
                                <div key={item.id} className="single-item mb-30">
                                    <div className="event_date f-left">
                                        <div className="event_date_inner">
                                            <h4 style={{ color: "purple" }}>{formatDate(item.startDateTime)}</h4>

                                        </div>
                                    </div>
                                    <div className="event_info">
                                        <h3>
                                            {item.title}
                                        </h3>
                                        <div className="event-detalis d-flex align-items-center">
                                            <div className="event-time mr-30 d-flex align-items-center">
                                                <i className="flaticon-clock-1"></i>
                                                <span>{formatTime(item.startDateTime)}</span>
                                            </div>
                                            <div className="event-location d-flex align-items-centere">
                                                <i className="flaticon-pin"></i>
                                                <span>{item.location}</span>
                                            </div>
                                        </div>
                                        <div className="event-aduence d-flex align-items-center">

                                            <div className="adence-info">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="get-ticket-btn">
                                            <p className={getButtonClass(item.startDateTime)}>
                                                {getEventStatus(item.startDateTime)}
                                            </p>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>
                </div>
            </div>
        </main>
    );
};

export default CampusEncounterMain;

