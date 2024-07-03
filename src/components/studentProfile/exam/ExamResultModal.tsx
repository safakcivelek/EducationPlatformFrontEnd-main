"use client"
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export const ResultItem: React.FC<{ label: string; value: any }> = ({ label, value }) => (
    <div className="exam-model-result">
        <p className="exam-model-description">{label}</p>
        <p className="exam-model-description">{value}</p>
    </div>
);

const ExamResultModal = ({ show, onHide, userAnswers }) => {
    return (
        <Modal
            show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>

            <Modal.Body className="exam-finished-m">
                <p className="exam-finished-description" >Test Bitti</p>
            </Modal.Body>

            <Modal.Body className="exam-general-description-m">
                {userAnswers.map((answer, index) => (
                    <>
                        <ResultItem key={index} label="Doğru" value={answer.correctCount} />
                        <ResultItem key={index} label="Yanlış" value={answer.wrongCount} />
                        <ResultItem key={index} label="Boş" value={answer.emptyCount} />
                        <ResultItem key={index} label="Puan" value={answer.totalScore} />
                    </>
                ))}
            </Modal.Body>

            <Modal.Body className="exam-report-exit-m">
                <div>
                    <Button onClick={onHide} className="exam-exit-button">Kapat</Button>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ExamResultModal;