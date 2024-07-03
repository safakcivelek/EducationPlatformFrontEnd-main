import { useEffect, useState } from "react";
import "./Certificates.css";
import { CertificateModel } from "@/models/response/Certificate/CertificateModel";
import { useStudentProfile } from "@/contextApi/StudentProfileContext";
import { GetStudentCertificateListDto, StudentModel } from "@/models/response/Student";
import { GetAllCertificatesResponse } from "@/models/response/Certificate/getAllCertificatesResponse";
import CertificateCard from "./CertificateCards/CertificateCards";
import CertificateService from "@/services/certificateService ";
import { AddCertificateRequest } from "@/models/request/Certificate/AddCertificateRequest";
import { toast } from "react-toastify";


function Certificates() {
    const [certificates, setCertificates] = useState<GetAllCertificatesResponse>([] as any);
    const { studentProfile, setStudentProfile } = useStudentProfile();
    const[reload,setReload]=useState(false);
   
    const certificateService = new CertificateService();

    const handleFileChange = async (event: any) => {
        const file = event.target.files ? event.target.files[0] : null;
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('https://tobetoapi.fatihsevencan.com/api/Images/upload', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) throw new Error('Sertifika yükleme başarısız.');

            const result = await response.json();

            // Eğer id alanı undefined ise, güncellenmiş profil nesnesini oluşturma
            if (studentProfile && studentProfile.id !== undefined) {
              
                const updatedCertificate: AddCertificateRequest = {
                    
                    studentId: studentProfile.id,
                    image : result.imageUrl
                };

                await certificateService.add(updatedCertificate);
                setReload(true);
                toast.success("Sertifika eklendi.", {
                    autoClose: 1000
                });

            } else {
                throw new Error('Öğrenci profilinde bir ID bulunamadı.');
            }

        } catch (error) {
            toast.error('Sertifika yükleme hatası', {
                autoClose: 1500
            });
        }
    };



    useEffect(() => {
       
    }, []);

    return (
        <div className="d-flex flex-column">
            <div className="certificates">
                <div className="row">
                    <div className="col-12 mb-6">
                        <div className="upload-area d-flex  flex-column align-items-center justify-content-center gap-3">
                            <label id="file-upload" className="upload-img mt-4 mb-2" onClick={handleFileChange}>
                                <svg className="m-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#2467ec" d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>
                                <input id="file-upload" type="file" style={{ display: "none" }} onChange={handleFileChange} />
                            </label>
                            <span className="mb-3">Dosya Yükle</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="anim-fadein col-12 mt-5 pb-3">
                <CertificateCard reload={reload} setReload={setReload} />
            </div> 

        
        </div>
    );
}

export default Certificates;