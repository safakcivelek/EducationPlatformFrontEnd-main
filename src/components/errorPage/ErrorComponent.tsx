import React from 'react';
import "../../../public/assets/css/errorServer.css";

export interface ErrorType {
    error: Error;   

}

const ErrorComponent = ({ error }: ErrorType) => {
    return (
        <div className="error-wrapper">
            <div className="error-container">
                <p className="error-message">Hata Oluştu: {error.message}</p>
                <p>Lütfen daha sonra tekrar deneyin veya destek ekibimizle iletişime geçin.</p>
                <div className="back-button">
                    <button onClick={() => window.history.back()}><b>Önceki Sayfaya Dön</b></button>
                </div>
            </div>
        </div>
    );
};

export default ErrorComponent;