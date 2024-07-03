
export interface CreateStudentLessonRequest {
    userId: number; 
    lessonId: string;
    startTime?: Date;
    endTime?: Date;
    isCompleted: boolean;
}
