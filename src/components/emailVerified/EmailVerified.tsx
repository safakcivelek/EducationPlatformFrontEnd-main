"use client"
import React, { useEffect, useState } from 'react';
import Preloader from '../common/Preloader';

const EmailVerified: React.FC = () => {
    const [verificationStatus, setVerificationStatus] = useState<string>('loading');

    useEffect(() => {
       
        if (typeof window !== 'undefined') {
            
            const urlParams = new URLSearchParams(window.location.search);
            const token = urlParams.get('token');
          
            
            if (token) {
                // Token varsa API'yi çağır
                fetch(`https://tobetoapi.fatihsevencan.com/api/Auth/VerifyEmailAuthenticator?ActivationKey=${token}`)
               
                    .then(response => {
                        if (response.ok) {
                            setVerificationStatus('verified');
                        } else {
                            setVerificationStatus('error');
                        }
                    })
                    .catch(() => {
                        setVerificationStatus('error');
                    });
            } else {
                // Token yoksa hata ver
                setVerificationStatus('error');
            }
        }
    }, []);

    const handleLoginRedirect = () => {
      
        window.location.href = '/login';
    };

   
    if (verificationStatus === 'loading') {
        return <Preloader/>;
    }

    return (
        <div className="email-verified-container">
            {verificationStatus === 'verified' && (
                <>
                    <h1 className="title">E-posta Adresiniz Doğrulandı!</h1>
                    <p className="description">
                        Tebrikler! E-posta adresiniz başarıyla doğrulandı ve artık giriş yapabilirsiniz.
                    </p>
                    <button onClick={handleLoginRedirect} className="login-button">
                        Giriş Yap
                    </button>
                </>
            )}
            {verificationStatus === 'error' && (
                <div className="error-message">
                    <div className="error-message">
                        <h2 className="error-title">Doğrulama Hatası!</h2>
                        <p className="error-description">
                            Doğrulama işlemi sırasında bir hata oluştu. Lütfen daha sonra tekrar deneyin veya
                            destek ekibimizle iletişime geçin.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EmailVerified;