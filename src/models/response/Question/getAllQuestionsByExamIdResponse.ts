import { GetAllQuestionsByExamIdDto } from "./getAllQuestionsByExamIdDto";

export interface GetAllQuestionsByExamIdResponse {
    
        items:GetAllQuestionsByExamIdDto[];
        index: number;
        size: number;
        count: number;
        pages: number;
        hasPrevious: boolean;
        hasNext: boolean;
    }