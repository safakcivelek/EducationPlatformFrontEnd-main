import { QuestionsChoiceDto } from "./questionsChoiceDto";

export interface GetAllQuestionsByExamIdDto {
    
        id:string;
        text:string;
        examId:string;
        choices: QuestionsChoiceDto[];
}