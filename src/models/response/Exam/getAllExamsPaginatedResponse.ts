import { ExamModel } from "./ExamModel";

export interface GetAllExamsPaginatedResponse{
    items: ExamModel[];
    index: number;
    size: number;
    count: number;
    pages: number;
    hasPrevious: boolean;
    hasNext: boolean;
}
