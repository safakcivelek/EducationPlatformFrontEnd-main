import React from "react";
import StudentImage from "../../../public/assets/img/course/course-student.png";
import Image from "next/image";
import StudentContactForm from "@/form/student-contact-form";
import StudentPasswordForm from "@/form/StudentPasswordForm";
import SocialProfileFrom from "@/form/social-profile-form";
import { useStudentProfile } from '../../contextApi/StudentProfileContext';
import { useInstructorProfile } from "@/contextApi/InstructorProfileContext";
import InstructorPasswordForm from "@/form/InstructorPasswordForm";
import InstructorContactForm from "@/form/InstructorContactForm";
import { InstructorModel } from "@/models/response/Instructor/InstructorModel";
import { toast } from "react-toastify";
import '../studentProfile/ProfileUpdate.css';
import InstructorService from "@/services/instructorService";
import { InstrcutorUpdateRequest } from "@/models/request/Instructor/InstrcutorUpdateRequest";


const InstructorUpdateProfile = () => {
  const { instructorProfile,setInstructorProfile } = useInstructorProfile();
  const service: InstructorService = new InstructorService();

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


      if (instructorProfile && instructorProfile.id !== undefined) {
        const updatedProfile: InstructorModel = {
          ...instructorProfile,
          imageUrl: result.imageUrl,
        };

        setInstructorProfile(updatedProfile);


        const updateInstructorData: InstrcutorUpdateRequest | any = {
            updateInstructorDto: {
                id: instructorProfile?.id || 0,
                firstName:instructorProfile.firstName,
                lastName:instructorProfile.lastName,
                email:instructorProfile.email,
                birthDate:instructorProfile.birthDate,
                phoneNumber:instructorProfile.phoneNumber,
                biography:instructorProfile.biography,
                linkedinUrl:instructorProfile.linkedinUrl,
                githubUrl:instructorProfile.githubUrl,
                imageUrl: result.imageUrl,
                title: instructorProfile?.title
            }
        };

        const response = await service.instrcutorUpdate(updateInstructorData);
            toast.success('Profil fotoğrafınız güncellendi!', {
                autoClose: 1200,
            });


        
      } else {
        console.error('Eğitmen profilinde bir ID bulunamadı.');
      }

    } catch (error) {
      console.error('Resim yükleme hatası:', error);
    }
  };

  const DeleteImg = async () => {
    try {
        const templateImg="https://i.imgur.com/6pI4RCr.png";
        if (instructorProfile && instructorProfile.id !== undefined) {
          const updatedProfile: InstructorModel = {
            ...instructorProfile,
            imageUrl: templateImg,
          };
  
          setInstructorProfile(updatedProfile);


        const updateInstructorData: InstrcutorUpdateRequest | any = {
            updateInstructorDto: {
                id: instructorProfile?.id || 0,
                firstName:instructorProfile.firstName,
                lastName:instructorProfile.lastName,
                email:instructorProfile.email,
                phoneNumber:instructorProfile.phoneNumber,
                biography:instructorProfile.biography,
                birthDate:instructorProfile.birthDate,
                linkedinUrl:instructorProfile.linkedinUrl,
                githubUrl:instructorProfile.githubUrl,
                imageUrl: templateImg,
                title: instructorProfile?.title
            }
        };

        const response = await service.instrcutorUpdate(updateInstructorData);
            toast.success('Profil fotoğrafınız silindi!', {
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
                  <img src={instructorProfile?.imageUrl} className="photo" style={{ width: '148px', height: '148px',objectFit:'cover' }} alt="Profil Resmi" />
                  <div className="cursor-pointer">
                    <label className="photo-edit-btn" htmlFor="imageUpload"></label>
                    <input id="imageUpload" type="file" onChange={handleFileChange} style={{ display: 'none' }} />
                  </div>
                  <div className="photo-delete cursor-pointer" onClick={DeleteImg}></div>
                </div>
              </div>
                <InstructorContactForm/>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="password"
            role="tabpanel"
            aria-labelledby="password-tab"
          >
            <InstructorPasswordForm/>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorUpdateProfile;
