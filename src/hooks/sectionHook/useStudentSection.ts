import { GetUserIdSectionResponse } from "@/models/response/Student/getUserIdSectionResponse";
import { useEffect, useState } from "react";
import { useTokenUser } from "../userHook/tokenUser";
import StudentService from "@/services/studentService";


export const useStudentSection = () => {
  const { userId, userRole } = useTokenUser();
  const studentService= new StudentService();

  const [sections, setSections] = useState<GetUserIdSectionResponse>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchSections = async () => {
      try {    
        const response = await studentService.getSectionsByUserId(userId)       
        setSections(response.data);

      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
 
      fetchSections();
    
  }, []);

  return { sections,error,loading};

};