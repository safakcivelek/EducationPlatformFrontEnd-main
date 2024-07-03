import { SectionInstructorModel } from "./SectionInstructorModel";

export interface GetAllSectionInstructorResponse {
    items: SectionInstructorModel[];
    index: number;
    size: 0;
    count: number;
    pages: 10;
    hasPrevious: boolean;
    hasNext: boolean;
}