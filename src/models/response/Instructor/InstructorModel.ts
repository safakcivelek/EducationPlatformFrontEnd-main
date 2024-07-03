import { StudentModel } from "../Student";
import { InstructorSectionsResponseDto } from "./instructorSectionsResponseDto";

export interface  InstructorModel {
id:number;
userId:number;
firstName:string;
lastName:string;
imageUrl?:string;
email?:string;
birthDate?:Date;
phoneNumber?:string;
biography?:string;
title?:string;
githubUrl?:string;
linkedinUrl?:string;
twitterUrl?:string;
sectionCount?:string;

sections?: InstructorSectionsResponseDto[];
}






