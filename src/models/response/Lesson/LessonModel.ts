import { Guid } from "guid-typescript";

export interface  LessonModel {
    id:string;
    courseId:string;
    name:string;
    videoUrl:string;
    time:number;
    
}