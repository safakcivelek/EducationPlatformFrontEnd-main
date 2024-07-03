import { QuestionModel } from "./QuestionModel";

export interface GetAllQuestionsPaginatedResponse {
    
    items:QuestionModel[];
    index: number;
    size: number;
    count: number;
    pages: number;
    hasPrevious: boolean;
    hasNext: boolean;
}