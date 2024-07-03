import { useState, useCallback } from 'react';
import UserAnswerService from "@/services/userAnswer";
import { UserAnswerAddRequest } from '../../models/request/userAnswer/userAnswerAddRequest';


export const useExamResult = (userId, examId) => {

    const userAnswerservice = new UserAnswerService();
    const [result, setResult] = useState({ totalScore: 0, correctCount: 0, wrongCount: 0, emptyCount: 0 });

    const calculateExamResult = useCallback((questions, selectedChoices) => {
        let correctCount = 0;
        let wrongCount = 0;
        let emptyCount = 0;

        questions.forEach(question => {
            const selectedChoice = selectedChoices.find(choice => choice.questionId === question.id);
            if (!selectedChoice || selectedChoice.choiceId === null) {
                emptyCount++;
            } else {
                const correctChoice = question.choices.find(choice => choice.isCorrect);
                if (selectedChoice.choiceId === correctChoice.id) {
                    correctCount++;
                } else {
                    wrongCount++;
                }
            }
        });

        const totalQuestions = questions.length;
        const totalScore = totalQuestions ? Math.round((100 * correctCount) / totalQuestions) : 0;

        setResult({ totalScore, correctCount, wrongCount, emptyCount });
    }, []);

    const Add = useCallback(async () => {
        const userAnswerRequest: UserAnswerAddRequest = {
            examId,
            userId,
            ...result
        };

        try {
            await userAnswerservice.add(userAnswerRequest);
        } catch (error) {
            console.error("Sınav sonuçları kaydedilirken bir hata oluştu:", error);
            alert("Sınav sonuçlarınızı kaydederken bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
        }
    }, [result, userId, examId]);

    return { result, calculateExamResult, Add };
};