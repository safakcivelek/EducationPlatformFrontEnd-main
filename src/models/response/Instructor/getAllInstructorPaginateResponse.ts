import { InstructorModel } from "./InstructorModel";

export interface GetAllInstructorPaginateResponse{
    items: InstructorModel[];
    index: number;
    size: number;
    count: number;
    pages: number;
    hasPrevious: boolean;
    hasNext: boolean;
}