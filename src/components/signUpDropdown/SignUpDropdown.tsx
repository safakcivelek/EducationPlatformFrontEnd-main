import React, { useState, useRef, useEffect } from 'react';
import '../profileDropdown/ProfileDropdown.css';
import Link from 'next/link';
//css dosyası olması gereken yerde olmalı!

const SignUpDropdown = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => { 
            const handleClickOutside = (event: MouseEvent) => {
                if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                    setDropdownOpen(false);
                }
            };

            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, []);

    return (
        <div className="profile-dropdown mobile-login-hide" ref={dropdownRef}>
            <button
                className="edu-btn"
                onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
                Üye Ol
                {/* <span className="dropdown-arrow" /> */}
            </button>
            {/* Dropdown açıkken içeriği gösteriyoruz */}
            {isDropdownOpen && (
                <div className="dropdown-menu">
                    <div className="dropdown-arrow-up"></div>

                    {/* Öğrenci ol seçeneği */}
                    <Link href="/student-registration"
                         className="dropdown-item">Öğrenci Üyelik Formu
                    </Link>
                                      
                    {/* Eğitmen ol seçeneği */}
                    <Link href="/instructor-registration"
                         className="dropdown-item">Eğitmen Üyelik Formu
                    </Link>
                    
                </div>
            )}
        </div>
    );
};

export default SignUpDropdown;