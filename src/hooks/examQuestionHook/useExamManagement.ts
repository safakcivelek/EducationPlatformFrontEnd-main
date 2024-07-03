import { useState, useCallback, useEffect } from 'react';

export const useExamManagement = (id, questionState) => {

    const [selectedChoices, setSelectedChoices] = useState<Array<{ questionId: string; choiceId: string | null }>>([]);

    const handleChoiceChange = useCallback((questionId, choiceId) => {
        setSelectedChoices(prevChoices => {
            let updatedChoices = [...prevChoices];
            const index = updatedChoices.findIndex(choice => choice.questionId === questionId);

            if (index !== -1) {
                // Eğer seçilen bir seçenek varsa, güncelle
                updatedChoices[index].choiceId = choiceId;
            } else {
                // Eğer seçilen bir seçenek yoksa, yeni bir öğe ekle
                updatedChoices.push({ questionId, choiceId });
            }

            // Tüm sorular için seçimlerin mevcut olduğundan emin ol
            questionState.questions.forEach(question => {
                if (!updatedChoices.some(choice => choice.questionId === question.id)) {
                    updatedChoices.push({ questionId: question.id, choiceId: null });
                }
            });

            // LocalStorage'a kaydet
            localStorage.setItem(`selectedChoices_${id}`, JSON.stringify(updatedChoices));

            return updatedChoices;
        });
    }, [id, questionState]);



    return { selectedChoices, setSelectedChoices, handleChoiceChange };
};

