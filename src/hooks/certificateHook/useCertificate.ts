import { useEffect, useState } from "react";
import { useTokenUser } from "../userHook/tokenUser";
import StudentService from "@/services/studentService";
import { GetStudentSkillsResponse } from "@/models/response/Student/getStudentSkillsResponse";
import { GetStudentCertificateResponse } from "@/models/response/Student/getStudentCertificateResponse";


export const useCertificate = () => {
    const{userId} = useTokenUser();
  const studentService= new StudentService();

  const [studentCertificate, setStudentCertificate] = useState<GetStudentCertificateResponse>()
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  
    const fetchStudentCertificate = async () => {
      try {    
        const responseStudentCertificate = await studentService.getCertificateByUserId(userId);
        setStudentCertificate(responseStudentCertificate.data);

      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
 
    useEffect(() => {
        fetchStudentCertificate();
  }, []);

  return { studentCertificate,setStudentCertificate,error,loading,studentService,userId,fetchStudentCertificate};
};