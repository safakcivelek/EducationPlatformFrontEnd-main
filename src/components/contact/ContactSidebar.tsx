
import ContactIconOne from '@/svg/contact-icon-one';
import ContactIconThree from '@/svg/contact-icon-three';
import ContactIconTwo from '@/svg/contact-icon-two';
import Link from 'next/link';
import React from 'react';

const ContactSidebar = () => {
    return (
        <div className="sidebar-widget-wrapper">
            <div className="support-contact mb-30">
                <div className="support-tittle">
                        <h4>İletişim Bilgileri</h4>
                </div>
                <div className="support-contact-inner">
                <div className="support-item">
                    <div className="support-icon">
                      <ContactIconOne/>
                    </div>
                    <div className="support-info-phone">
                        <span>Telefon</span>
                            <Link href="tel:(0216) 331 48 00"> (0216) 331 48 00</Link>
                    </div>
                </div>
                <div className="support-item">
                    <div className="support-icon">
                       <ContactIconTwo/>
                    </div>
                    <div className="support-info-email">
                        <span>Email</span>
                        istanbulkodluyor@tobeto.com
                       
                    </div>
                </div>
                <div className="support-item">
                    <div className="support-icon">
                        <ContactIconThree/>
                    </div>
                    <div className="support-info-location">
                        <span>Adres</span>
                            Kavacık, Rüzgarlıbahçe Mah. Çampınarı Sok. No:4 Smart Plaza B Blok Kat:3 34805, Beykoz/İstanbul
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSidebar;