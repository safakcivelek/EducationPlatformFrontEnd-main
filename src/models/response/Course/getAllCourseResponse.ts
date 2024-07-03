import { CourseModel } from "./CourseModel";

export interface GetAllCourseResponse {
    items: CourseModel[];
    index: number;
    size: 0;
    count: number;
    pages: 10;
    hasPrevious: boolean;
    hasNext: boolean;
}