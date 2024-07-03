import { getSectionLockResponse } from "@/models/response/Section/getSectionLockResponse";
import { useTokenUser } from "../userHook/tokenUser";
import { useEffect, useState } from "react";



export const useLockSection = () => {
  const { userId, userRole } = useTokenUser();
  const [verify, setVerify] = useState<getSectionLockResponse>();
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchSections = async () => {
      try{
        if (userRole === "Student") {
          const responseStudent = await fetch(`https://tobetoapi.fatihsevencan.com/api/Students/studentlock/${userId}`);
        const responseStudentData: getSectionLockResponse = await responseStudent.json();
        setVerify(responseStudentData);
      } else if (userRole==="instructor"){
          const responseInstructor = await fetch(`https://tobetoapi.fatihsevencan.com/api/Instructors/instructorlock/${userId}`);
        const responseInstructorData: getSectionLockResponse = await responseInstructor.json();
        setVerify(responseInstructorData);
      }
      }
      catch (err) {
        setError(err as Error);
      }
      
  };

      fetchSections();
  }, []);

  return { verify};
};