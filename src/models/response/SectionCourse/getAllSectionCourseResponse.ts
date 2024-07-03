import { SectionCourseModel } from "./SectionCourseModel";

export interface GetAllSectionCourseResponse {
    items: SectionCourseModel[];
    index: number;
    size: 0;
    count: number;
    pages: 10;
    hasPrevious: boolean;
    hasNext: boolean;
}