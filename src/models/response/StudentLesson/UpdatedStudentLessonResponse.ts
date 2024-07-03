
export interface UpdatedStudentLessonResponse {
    id: string;
    studentId: number;
    lessonId: string;
    startTime?: Date;
    endTime?: Date;
    isCompleted: boolean;
}
