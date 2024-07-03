"use client"
import React, { useEffect } from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ContactFormSection from './ContactFormSection';
import ContactMap from './ContactMap';
import ContactSidebar from './ContactSidebar';

const ContactMain = () => {
    useEffect(() => {
        const form = document.querySelector("#yourFormId"); 
        if (form) {
          form.addEventListener("submit", handleSubmit);
        }
        return () => {
          if (form) {
            form.removeEventListener("submit", handleSubmit);
          }
        };
      }, []);
    
      const handleSubmit = (event:any) => {
        event.preventDefault();
      };
    return (
        <main>
            <Breadcrumb title="İletişim" subTitle="" />

            <div className="contact-area pt-120 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7 col-md-12">
                            <div className="contact-area-wrapper">
                                <div className="section-title mb-50">
                                    <h3> Her türlü soru, öneri ve geri bildirimleriniz için aşağıdaki formu kullanarak bize ulaşabilirsiniz.</h3>
                                </div>
                                <ContactFormSection />
                                <ContactMap />
                            </div>
                            
                        </div>
                        <div className="col-xl-4 col-lg-5 col-md-8">
                            <ContactSidebar />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ContactMain;