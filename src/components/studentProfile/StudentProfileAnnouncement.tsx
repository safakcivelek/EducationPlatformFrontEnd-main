"use client"
import { GetAllAnnouncementResponse } from "@/models/response/Announcement/getAllAnnouncementResponse";
import AnnouncementService from "@/services/announcementService";
import React, { useEffect, useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import './Announcement.css';



const StudentProfileAnnouncement = () => {

    const announcementService = new AnnouncementService();

    const [announcement,setAnnouncement] = useState<GetAllAnnouncementResponse>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    const [showModal, setShowModal] = useState<{[key: string]: boolean}>({});

// Modal'ı açmak için
const handleShow = (id: string) => {
  setShowModal({...showModal, [id]: true});
};

// Modal'ı kapatmak için
const handleClose = (id: string) => {
  setShowModal({...showModal, [id]: false});
};

  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {    
        const responseStudentSkill = await announcementService.getAll();
        setAnnouncement(responseStudentSkill.data);

      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
 
      fetchAnnouncement();
      
  }, []);
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('tr-TR', options);
  };

  return (
    <>
    {announcement?.items.map((announ)=>(
        <div key={announ.id} className="col-md-4 col-12 my-4">
            <div className="notfy-card notify">
                <div className="d-flex flex-column">
                    <div className="d-flex justify-content-between mb-4">
                        <span className="type">Duyuru</span>
                        <span className="corp-names type">Tobeto</span>
                    </div>
                    <span className="headern">{announ.name}</span>
                </div>
                <div className="d-flex justify-content-between">
                    <span className="date">{announ?.createdDate ? formatDate(announ?.createdDate):"00/00/0000"}</span>
                    <button type="button" onClick={() => handleShow(announ?.id)} className="read-more">
                                Devamını Oku
                    </button>

                    <Modal show={showModal[announ?.id]} onHide={() => handleClose(announ?.id)}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered>
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">{announ.name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {announ.description}
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        </div>
        
        

    ))}
          
    </>
  );
};

export default StudentProfileAnnouncement;