import { GetAllSurveyResponse } from "@/models/response/Survey/getAllSurveyResponse";
import SurveyService from "@/services/surveyService";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const StudentProfileSurvey = () => {

  const [surveys, setSurveys] = useState<GetAllSurveyResponse>();
  const surveyService = new SurveyService();

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('tr-TR', options);
  };

  const getEventStatus = (endDate: string) => {
    const eventDate = new Date(endDate);
    const now = new Date();
    return eventDate < now ? "Anket Sonuçlandı" : "Ankete Git";
  };

  const getButtonClass = (endDate: string) => {
    const eventDate = new Date(endDate);
    const now = new Date();
    return eventDate < now ? "get-btn-3" : "get-btn-4";
  };


  const handleButtonClick = (endDate: string, formUrl: string) => {
    const buttonRedirect = getButtonRedirect(endDate, formUrl);
    if (buttonRedirect !== "#") {
      window.open(buttonRedirect, '_blank');
    }
  };

  const isButtonDisabled = (endDate: string) => {
    const eventDate = new Date(endDate);
    const now = new Date();
    return eventDate < now;
  };


   


  useEffect(() => {

    const fetchSurveys = async () => {
      try {
        const response = await surveyService.getAll();
        setSurveys(response.data);

      } catch (error) {
        console.error("Anketler getirilirken hata oluştu:", error);
      }
    };

    fetchSurveys();

  }, [])

  const getButtonRedirect = (endDate: string, itemUrl: string) => {
    const eventDate = new Date(endDate);
    const now = new Date();
    return eventDate < now ? "" : itemUrl;
  };


    return (
        <>
            <div className="student-profile-reviews">
                {surveys?.items.map((item) => (
                    <div key={item.name} className="student-profile-reviews-item mb-30">
                        <div className="student-profile-reviews-course-title">
                            <h5>
                                <i className="fas fa-poll-h"></i> &nbsp;
                                {item.name}
                            </h5>
                        </div>

                        <div className="student-profile-reviews-text mb-30">
                            <div className="student-profile-review-content">
                                <p>{item.description}</p>
                            </div>
                        </div>

                        <div className="container">
                            <div className="d-flex justify-content-between align-items-center ml-10">
                                <div className="event-detalis d-flex align-items-center">
                                    <div className="event-location d-flex align-items-center">
                                        <i className="flaticon-clock-1 mt-1"></i>
                                        <span >Bitiş tarihi: {formatDate(item.endDate)}</span>
                                    
                                    </div>
                                </div>

                                <button
                                    className={`get-ticket-btn-survey ${getButtonClass(item.endDate)} mb-30`}
                                    onClick={() => handleButtonClick(item.endDate, item.formUrl)}
                                    disabled={isButtonDisabled(item.endDate)}
                                >
                                    {getEventStatus(item.endDate)}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default StudentProfileSurvey;
