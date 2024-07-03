import { Guid } from "guid-typescript";

export interface  getLessonResponse {
id:Guid;
producerCompanyId:Guid;
courseId:Guid;
languageId:Guid;
name:string;
time:number;
imageUrl:string;
description:string;

//Course:CourseModel;
//Language:LanguageModel;
//ProducerCompany:ProducerCompanyModel;
}