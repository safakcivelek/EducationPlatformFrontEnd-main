import { GetAllQuestionsByExamIdDto } from "../Question/getAllQuestionsByExamIdDto";

export interface GetExamForQuestionsResponse {
    id:string;
    name:string;
    description:string;
    duration:number;
    questionCount:number;
    questionType:string;
    questions:GetAllQuestionsByExamIdDto[];
    }