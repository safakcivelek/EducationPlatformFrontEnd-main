"use client"
import { useExams } from "@/hooks/examHook/useExams";
import { formatDate } from "@/utils/formatDate";
import { useState } from "react";
import ExamResultModal from "./ExamResultModal";
import { getButtonClass, getButtonLabel, isButtonDisabled } from "@/utils/examButtonUtils";
import ExamDetailModal from "./ExamDetailModal";

const Exam = () => {

    const { exams } = useExams();
    const [examDetailModal, setExamDetailModal] = useState<{ [key: string]: boolean }>({});
    const [examResultModal, setExamResultModal] = useState(false);
    const [currentExamResults, setCurrentExamResults] = useState([]);


    // Sınav Detayı Modalı'nı açmak için
    const handleShow = (id: string) => {
        setExamDetailModal({ ...examDetailModal, [id]: true });
    };

    // Sınav Detayı Modalı'nı kapatmak için
    const handleClose = (id: string) => {
        setExamDetailModal({ ...examDetailModal, [id]: false });
    };

    // İlk Modaldaki Raporu görüntüle butonuna tıkladığımızda
    const handleViewReport = (examId: string, userAnswers) => {
        // Mevcut modaldan çık
        setExamDetailModal({ ...examDetailModal, [examId]: false });
        setCurrentExamResults(userAnswers);

        // Yeni modalı aç
        setExamResultModal(true);
    };

    return (
        <main>
            <div className="exam-area  pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-12 col-lg-7">
                            {exams.map((exam) => (
                                <div key={exam.id} className="single-item mt-15 mb-30">
                                    <div className="exam_date f-left" >
                                        <div className="exam_date_inner" >
                                            <h3>
                                                {exam.userAnswers.length > 0 ? (
                                                    exam.userAnswers.map((answer) => (
                                                        <span key={answer.id}>{answer.totalScore} Puan</span>
                                                    ))
                                                ) : (
                                                    <i className="fad fa-file-signature"></i>
                                                )}
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="exam_info">
                                        <h4>
                                            {exam.name}
                                        </h4>

                                        <div className="exam-aduence d-flex align-items-center mt-1">
                                            <div className="exam-time mr-30 d-flex align-items-center">
                                                <i className="fal fa-calendar-alt"></i>
                                                <span>Başlangıç Tarihi : {formatDate(exam.startDate)}</span>
                                            </div>
                                        </div>

                                        <div className="exam-aduence d-flex align-items-center mt-1">
                                            <div className="exam-time mr-30 d-flex align-items-center">
                                                <i className="fal fa-calendar-alt"></i>
                                                <span>Bitiş Tarihi : {formatDate(exam.endDate)}</span>
                                            </div>
                                        </div>
                                        {/* Sınav Detay Modal */}
                                        <ExamDetailModal
                                            key={exam.id}
                                            exam={exam}
                                            show={examDetailModal[exam.id]}
                                            onHide={() => handleClose(exam.id)}
                                            handleViewReport={handleViewReport}
                                        />

                                        {/* ExamResultModal Modal */}
                                        <ExamResultModal
                                            show={examResultModal}
                                            onHide={() => setExamResultModal(false)}
                                            userAnswers={currentExamResults}
                                        />

                                    </div>

                                    {/* Sınav durum butonları */}
                                    <button
                                        type="button"
                                        onClick={() => handleShow(exam?.id)}
                                        disabled={isButtonDisabled(exam)}  >

                                        <p className={getButtonClass(exam)}>
                                            {getButtonLabel(exam)}
                                        </p>
                                    </button>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Exam;
