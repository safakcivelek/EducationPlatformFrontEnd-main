import { LessonModel } from "../Lesson/LessonModel";

export interface CourseModel {
    id: string;
    totalTime: number;
    name: string;
    lessons: LessonModel[] | undefined;  
}


