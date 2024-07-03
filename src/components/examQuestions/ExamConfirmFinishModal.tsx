import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface ConfirmFinishModalProps {
    showModal: boolean;
    handleCancelFinish: () => void;
    handleConfirmFinish: () => void;
}

const ExamConfirmFinishModal: React.FC<ConfirmFinishModalProps> = ({ showModal, handleCancelFinish, handleConfirmFinish }) => {
    return (
        <Modal show={showModal} onHide={handleCancelFinish} aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Body>
                <Modal.Title>Sınavı Tamamla?</Modal.Title>
            </Modal.Body>
            <Modal.Body>
                Sınavı tamamlamak istediğinize emin misiniz?
            </Modal.Body>
            <Modal.Footer style={{ flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button variant="secondary" onClick={handleCancelFinish} style={{ marginRight: '10px' }}>
                        İptal
                    </Button>
                    <Button variant="danger" onClick={handleConfirmFinish}>
                        Tamamla
                    </Button>
                </div>
            </Modal.Footer>
        </Modal>
    );
};

export default ExamConfirmFinishModal;
