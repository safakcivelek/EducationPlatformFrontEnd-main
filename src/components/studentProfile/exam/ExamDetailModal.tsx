import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import Link from 'next/link';
import { GetStudentExamsListDto } from "@/models/response/Student/Exam/getStudentExamsListDto";

interface ExamDetailModalProps {
  exam: GetStudentExamsListDto;
  show: boolean;
  onHide: () => void;
  handleViewReport: (examId: string, userAnswers: any[]) => void;
}

const ExamDetailModal: React.FC<ExamDetailModalProps> = ({ exam, show, onHide, handleViewReport }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>

      <Modal.Body>
        <Modal.Title id="contained-modal-title-vcenter"><h3>{exam.name}</h3></Modal.Title>
      </Modal.Body>
      <Modal.Body>
        <div className="exam-aduence d-flex align-items-center">
          <div className="exam-time mr-30 d-flex align-items-center">
            <b>{exam.description}</b>
          </div>
        </div>
        <div className="mt-45">
          <div className="exam-aduence d-flex align-items-center mt-15">
            <div className="exam-time2 mr-30 d-flex align-items-center">
              <span>Sınav Süresi : {exam.duration} Dakika</span>
            </div>
          </div>
          <div className="exam-aduence d-flex align-items-center mt-20">
            <div className="exam-time2 mr-30 d-flex align-items-center">
              <span>Soru Sayısı : {exam.questionCount}</span>
            </div>
          </div>
          <div className="exam-aduence d-flex align-items-center mt-20">
            <div className="exam-time2 mr-30 d-flex align-items-center">
              <span>Soru Tipi : {exam.questionType}</span>
            </div>
          </div>
        </div>

        <div className="mt-35">
          {exam.userAnswers.length > 0 ? (
            exam.userAnswers.map((answer) => (
              <div key={answer.id} className="exam-report-show-m">
                <Button variant="primary" className="exam-report-show" onClick={() => handleViewReport(exam.id, exam.userAnswers)}>
                  Raporu Görüntüle
                </Button>
              </div>
            ))
          ) : (
            <div className="exam-report-show-m">
              <Button variant="primary" className="exam-report-show">
                <Link href={`/exam-questions/${exam.id}`}>
                  {localStorage.getItem(`examTime_${exam.id}`) ? "Sınava Devam Et" : "Sınava Başla"}
                </Link>
              </Button>
            </div>
          )}
        </div>
      </Modal.Body>
      
    </Modal>
  );
};

export default ExamDetailModal;