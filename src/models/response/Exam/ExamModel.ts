import { Guid } from "guid-typescript";

export interface ExamModel {
id:string;
name:string;
description:string;
duration:number;
questionCount:number;
startDate:string;
endDate:string;
questionType:string;
}

