import { useTokenUser } from '@/hooks/userHook/tokenUser';
import { parseJwt } from '@/utils/parseJWT';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';

interface ProfileDropdownProps {
    userName: string;
}

const MobileProfileDropdown: React.FC<ProfileDropdownProps> = ({ userName }) => {
    const { userRole } = useTokenUser();
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const logout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('tokenExpiration');
        window.location.href = '/';
    };

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
        <div className="profile-dropdown" ref={dropdownRef}>
            <button
                className="profile-button"
                onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
                <img src="https://i.imgur.com/6pI4RCr.png" /> {userName}

                <span className="dropdown-arrow" />
            </button>
            {isDropdownOpen && (
                <div className="dropdown-menu">
                    {/* Rolüne göre uygun profil sayfasına yönlendirme */}
                    {userRole === "Student" ? (
                        <Link href="/student-profile" className="dropdown-item">
                            Profil Bilgileri
                        </Link>
                    ) : userRole === "instructor" ? (
                        <Link href="/instructor-profile" className="dropdown-item">
                            Profil Bilgileri
                        </Link>
                    ) : null}
                    <hr className="dropdown-divider" />
                    <button onClick={logout} className="dropdown-item logout-btn">
                        Oturumu Kapat
                    </button>
                </div>
            )}
        </div>
    );
};

export default MobileProfileDropdown;
