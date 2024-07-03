import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { CheckCircle } from 'react-bootstrap-icons';


const EmailVerificationModal = ({ show, onClose }) => {
    const modalStyle = {
        borderColor: '#28a745',
    };

    const headerStyle = {
        backgroundColor: '#28a745',
        color: '#f8f8f8',
    };

    return (
        <Modal
            show={show}
            onHide={onClose}
            centered
            style={modalStyle}
            aria-labelledby="contained-modal-title-vcenter"
        >
            <Modal.Header closeButton style={headerStyle}>
                <Modal.Title id="contained-modal-title-vcenter" style={{ color: 'white' }}>
                    Kayıt Başarılı! <CheckCircle size={24} />
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Lütfen e-posta adresinize gönderilen onay linkine tıklayarak kaydınızı tamamlayın.</p>
                <p>E-postayı göremiyorsanız, lütfen spam klasörünüzü kontrol edin.</p>
            </Modal.Body>
            <Modal.Footer>
                <Button className="button-style" onClick={onClose}>
                    Anladım
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

 export default EmailVerificationModal;