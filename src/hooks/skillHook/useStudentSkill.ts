import { useEffect, useState } from "react";
import { useTokenUser } from "../userHook/tokenUser";
import StudentService from "@/services/studentService";
import { GetStudentSkillsResponse } from "@/models/response/Student/getStudentSkillsResponse";

export const useStudentSkill = () => {

  const { userId } = useTokenUser();
  const studentService= new StudentService();

  const [studentSkills, setStudentSkills] = useState<GetStudentSkillsResponse>()
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  
    const fetchStudentSkill = async () => {
      try {    
        const responseStudentSkill = await studentService.getSkillsByUserId(userId);
        setStudentSkills(responseStudentSkill.data);

      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
 
    useEffect(() => {
      fetchStudentSkill();
  }, []);

  return { studentSkills,setStudentSkills,error,loading,studentService,userId,fetchStudentSkill};
};