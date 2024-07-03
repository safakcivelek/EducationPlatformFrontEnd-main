import React, { useEffect, useState } from 'react';
import StudentLessonService, { CompletedLessonDto } from '../../services/studentLessonService';
import { CreateStudentLessonRequest } from '../../models/request/StudentLesson/CreateStudentLessonRequest';
import { UpdateStudentLessonRequest } from '../../models/request/StudentLesson/UpdateStudentLessonRequest';


export const useStudentLessonLifecycle = (userId: number, lessonId: string) => {
    const studentLessonService = new StudentLessonService();
    const [studentLessonId, setStudentLessonId] = useState<string | null>(null);
    const [completedLessons, setCompletedLessons] = useState<CompletedLessonDto[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchCompletedLessons = async () => {
            try {
                setLoading(true);
                const response = await studentLessonService.getCompletedLessonsByStudentId({ userId });
                setCompletedLessons(response.data);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchCompletedLessons();
    }, [userId, studentLessonId]);

    const handleVideoStart = async () => {
        const startTime = new Date();
        const createRequest: CreateStudentLessonRequest = {
            userId,
            lessonId,
            startTime,
            isCompleted: false,
        };
        try {
            const response = await studentLessonService.createStudentLesson(createRequest);
            setStudentLessonId(response.data.id);
        } catch (error) {
            console.error('Video başlama bilgisini kaydetmede hata oluştu', error);
        }
    };

    const handleVideoEnd = async () => {
        if (!studentLessonId) {
            console.error('Video bitirme işlemi için bir studentLessonId bulunamadı.');
            return;
        }
        const endTime = new Date();
        const updateRequest: UpdateStudentLessonRequest = {
            id: studentLessonId,
            endTime,
            isCompleted: true,
        };
        try {
            await studentLessonService.updateStudentLesson(updateRequest);

            // Güncellemeden sonra listeyi yenilemek için tamamlanan dersleri tekrar getir
            const response = await studentLessonService.getCompletedLessonsByStudentId({ userId });
            setCompletedLessons(response.data);
        } catch (error) {
            console.error('Video bitirme bilgisini kaydetmede hata oluştu', error);
        }
    };

    return { handleVideoStart, handleVideoEnd, completedLessons, loading, error };
};