import { useState, useEffect } from 'react';
import StudentService from "@/services/studentService";
import { useTokenUser } from "@/hooks/userHook/tokenUser";

export const useExams = () => {
    const { userId } = useTokenUser();
    const [exams, setExams] = useState([]);
    const studentService = new StudentService();

    useEffect(() => {
        const fetchExams = async () => {
            const response = await studentService.getExamsByUserId(userId);
            setExams(response.data.exams);
        };

        if (userId) fetchExams();
    }, [userId]);

    return { exams };
};
