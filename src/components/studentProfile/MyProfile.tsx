
"use client"
import React from "react";
import { useStudentProfile } from '../../contextApi/StudentProfileContext';

const MyProfile = () => {
    const {studentProfile } = useStudentProfile(); 

    
  return (
    <>
      <ul className="student-profile-info">
        <li>
          <h5>Doğum Tarihi:</h5>
          {studentProfile?.birthDate && (
        <span>{new Date(studentProfile.birthDate).toLocaleDateString()}</span>
        )}
        </li>
        <li>
          <h5>Ad :</h5>
        <span>{studentProfile?.firstName}</span>
        </li>
        <li>
          <h5>Soyad :</h5>
         <span>{studentProfile?.lastName}</span>
        </li>
        <li>
          <h5>E-Posta :</h5>
          <span>{studentProfile?.email}</span>
        </li>
        <li>
          <h5>Telefon :</h5>
          <span>{studentProfile?.phoneNumber} 5455553366 şuan boş</span>
        </li>
        <li>
          <h5>Rol :</h5>
          <span>Öğrenci</span>
        </li>
        <li>
          <h5>Hakkımda :</h5>
          <span>
          {studentProfile?.biography} şuan dbde boş
          </span>
        </li>
      </ul>
    </>
  );
};

export default MyProfile;
