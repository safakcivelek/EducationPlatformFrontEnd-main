import { LessonModel } from "./LessonModel";

export interface  getAllLessonResponse {
    items: LessonModel[];
    index: number;
    size: 0;
    count: number;
    pages: 10;
    hasPrevious: boolean;
    hasNext: boolean;

}