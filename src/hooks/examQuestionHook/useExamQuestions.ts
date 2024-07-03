import ExamService from "@/services/examService";
import { useEffect, useState } from "react";
import { useTokenUser } from "../userHook/tokenUser";
import { GetExamForQuestionsResponse } from "@/models/response/Exam/getExamForQuestionsResponse";


export const useExamQuestions = (examId) => {
    const { userId } = useTokenUser();
    const examService = new ExamService();
    const [questionState, setQuestionState] = useState<GetExamForQuestionsResponse>();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await examService.getQuestionsByExamId(examId);
                setQuestionState(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        if (examId) { fetchQuestions(); }
    }, [examId]);

    return { userId, questionState, isLoading, error };
};