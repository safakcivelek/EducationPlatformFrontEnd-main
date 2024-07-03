import { GetStudentExamUserAnswersDto } from "./getStudentExamUserAnswersDto";

export interface GetStudentExamsListDto {

    id:string;
    name:string;
    description:string;
    duration:number;
    questionCount:number;
    questionType:string;
    startDate:string;
    endDate:string;

    userAnswers: GetStudentExamUserAnswersDto[];
}