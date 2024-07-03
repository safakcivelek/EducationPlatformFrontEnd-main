import { toast } from "react-toastify";
import Link from "next/link";
import CertificateService from "@/services/certificateService ";
import { useStudentProfile } from "@/contextApi/StudentProfileContext";
import { useEffect, useState } from "react";
import { GetCertificateDetailResponse } from "@/models/response/Certificate/getCertificateDetailResponse";
import StudentService from "@/services/studentService";
import { CertificateModel } from "@/models/response/Certificate/CertificateModel";
import { GetStudentCertificateListDto } from "@/models/response/Student";
import { useCertificate } from "@/hooks/certificateHook/useCertificate";

export interface StudentCertificateProps {
    reload: boolean;
    setReload: React.Dispatch<React.SetStateAction<boolean>>;
}


const CertificateCard: React.FC<StudentCertificateProps> = ({ reload, setReload }) => {

    const { studentCertificate, fetchStudentCertificate } = useCertificate();

    const { studentProfile, setStudentProfile } = useStudentProfile();

    useEffect(() => {
        if (reload) {
            fetchStudentCertificate();
            setReload(false);
        }
    }, [reload]);


    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'long', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('tr-TR', options);
    };



    const deleteCertificates = async (id: any) => {
        const certificateService = new CertificateService;
        await certificateService.delete(id);
        setReload(true);
        toast.success("Sertifika silindi.", {
            autoClose: 1000
        });

        if (studentProfile?.certificates) {
            const updatedCertificates: GetStudentCertificateListDto[] = studentProfile.certificates.filter(item => item.id !== id);
            setStudentProfile({ ...studentProfile, certificates: updatedCertificates });
        }
    };


    const extractFileName = (url: any) => {
        const parts = url.split('/');
        return parts[parts.length - 1];
    };

    const downloadCertificate = (url: any) => {
        // Dosyanın indirme işlemi yapılır
        const fileName = extractFileName(url);
        fetch(url)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', fileName);
                document.body.appendChild(link);
                link.click();
            })
            .catch(error => console.error('İndirme işlemi başarısız:', error));
    };


    return (
        <>
            <table className="table table-borderless mt-50">
                <thead >
                    <tr style={{ fontWeight: 'bold', backgroundColor: '#f8f8f9' }}>
                        <th scope="col" className="p-4 float-start">Sertifika İsmi</th>
                        <th scope="col" className="p-4 float-none">Tarih</th>
                        <th scope="col" className="p-4 float-end">İşlem</th>
                    </tr>
                </thead>
                <tbody>
                    {studentCertificate?.certificates?.map((item) => (
                        <tr key={item.id}>
                            <td scope="row" className="p-4">{extractFileName(item?.image)}</td>
                            <td scope="row" className="p-4">{item?.createdDate ? formatDate(item?.createdDate) : "00/00/0000"}</td>
                            <td scope="row" className="float-end">
                                <button className="p-3" onClick={() => downloadCertificate(item?.image)}>
                                    <i className="fas fa-download" style={{color:'#2467EC'}}></i>
                                </button>
                                <button onClick={() => deleteCertificates(item.id)}>
                                    <i className="fas fa-trash" style={{color:'red'}}></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </>
    );

};

export default CertificateCard;