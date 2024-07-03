import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContact } from '../hooks/contactHook/useContact';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    });

    const { sendContactForm, isLoading, error, isSuccess } = useContact();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await sendContactForm(formData);
            
            toast.success("Mesajınız bize ulaştı, teşekkürler!", {
                position: "top-right",
                autoClose: 5000,
            });
            // Formu sıfırla
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            
            toast.error(`Mesajınız gitmedi, hata: ${error.message}`, {
                position: "top-right",
                autoClose: 5000,
            });
        }
    };

   

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-xl-6">
                    <div className="contact-from-input mb-20">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="Ad"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="contact-from-input mb-20">
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Soyad"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="contact-from-input mb-20">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="contact-from-input mb-20">
                        <input
                            type="text"
                            name="subject"
                            placeholder="Konu"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="col-xl-12">
                    <div className="contact-from-input mb-20">
                        <textarea
                            name="message"
                            placeholder="Mesaj"
                            required
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="col-xl-12">
                        <div className="cont-btn mb-20">
                        <button
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Gönderiliyor...' : 'Gönder'}
                        </button>
                        </div>
                </div>
            </div>
          
        </form>
            
        </>
    );
};

export default ContactForm;