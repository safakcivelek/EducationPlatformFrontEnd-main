import React from "react";
import StudentContactForm from "@/form/student-contact-form";
import StudentPasswordForm from "@/form/StudentPasswordForm";
import { useStudentProfile } from '../../contextApi/StudentProfileContext';
import { StudentModel } from "../../models/response/Student/StudentModel";
import './ProfileUpdate.css';
import { toast } from "react-toastify";
import { StudentUpdateRequest } from "@/models/request/Student/StudentUpdateRequest";
import StudentService from "@/services/studentService";
import Select from "react-select";


const StudentUpdateProfile = () => {
  const { studentProfile, setStudentProfile } = useStudentProfile();
  const service: StudentService = new StudentService();

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch('https://tobetoapi.fatihsevencan.com/api/Images/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Resim yükleme başarısız.');

      const result = await response.json();


      if (studentProfile && studentProfile.id !== undefined) {
        const updatedProfile: StudentModel = {
          ...studentProfile,
          imageUrl: result.imageUrl,
        };

        setStudentProfile(updatedProfile);
        const updatedStudentData: StudentUpdateRequest | any = {
          updateStudentDto: {
              id: studentProfile?.id || 0,
              firstName:studentProfile.firstName,
              lastName:studentProfile.lastName,
              email:studentProfile.email,
              birthDate:studentProfile.birthDate,
              phoneNumber:studentProfile.phoneNumber,
              biography:studentProfile.biography,
              linkedinUrl:studentProfile.linkedinUrl,
              githubUrl:studentProfile.githubUrl,
              imageUrl: result?.imageUrl,
              provinceId: studentProfile.provinceId,
              districtId: studentProfile.districtId,
          }
      };
        const response =await service.studentUpdate(updatedStudentData);
        toast.success('Profil fotoğrafınız güncellendi!');
        
      } else {
        console.error('Öğrenci profilinde bir ID bulunamadı.');
      }

    } catch (error) {
      console.error('Resim yükleme hatası:', error);
    }
  };

  const DeleteImg = async () => {
    try {
        const templateImg="https://i.imgur.com/6pI4RCr.png";
        
        if (studentProfile && studentProfile.id !== undefined) {
          const updatedProfile: StudentModel = {
            ...studentProfile,
            imageUrl: templateImg,
          };
  
          setStudentProfile(updatedProfile);
          

        setStudentProfile(updatedProfile);
        const updatedStudentData: StudentUpdateRequest | any = {
          updateStudentDto: {
              id: studentProfile?.id || 0,
              firstName:studentProfile.firstName,
              lastName:studentProfile.lastName,
              email:studentProfile.email,
              phoneNumber:studentProfile.phoneNumber,
              birthDate:studentProfile.birthDate,
              biography:studentProfile.biography,
              linkedinUrl:studentProfile.linkedinUrl,
              githubUrl:studentProfile.githubUrl,
              imageUrl: templateImg,
              provinceId: studentProfile.provinceId,
              districtId: studentProfile.districtId,
          }
      };
        const response =await service.studentUpdate(updatedStudentData);
        toast.success("Profil fotoğrafınız silindi.", {
          autoClose: 1200,
      });
          
        }}
      catch (error) {
        toast.error("Resim Silinemedi.");
      }
  };

 
  return (
      <>
         
      <div className="student-profile-enroll">
        <ul className="nav mb-30" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="profileA-tab"
              data-bs-toggle="tab"
              data-bs-target="#profileA"
              type="button"
              role="tab"
              aria-controls="profileA"
              aria-selected="true"
            >
              Profilim
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="password-tab"
              data-bs-toggle="tab"
              data-bs-target="#password"
              type="button"
              role="tab"
              aria-controls="password"
              aria-selected="false"
            >
              Şifre
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="profileA"
            role="tabpanel"
            aria-labelledby="profileA-tab"
                  >
          
            <div className="student-profile-settings">
              <div className="col-12 mb-30 text-center">
                <div className="profile-photo mx-auto">
                  <img src={studentProfile?.imageUrl} className="photo" style={{ width: '148px', height: '148px',objectFit:'cover' }} alt="Profil Resmi" />
                  <div className="cursor-pointer">
                    <label className="photo-edit-btn" htmlFor="imageUpload"></label>
                    <input id="imageUpload" type="file" onChange={handleFileChange} style={{ display: 'none' }} />
                  </div>
                  <div className="photo-delete cursor-pointer" onClick={DeleteImg}></div>
                </div>
              </div>
     
              <StudentContactForm />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="password"
            role="tabpanel"
            aria-labelledby="password-tab"
          >
            <StudentPasswordForm />
          </div>
          <div
            className="tab-pane fade"
            id="completedA"
            role="tabpanel"
            aria-labelledby="completedA-tab"
          >
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentUpdateProfile;