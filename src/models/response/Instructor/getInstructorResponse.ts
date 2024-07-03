import { InstructorModel } from "./InstructorModel";
import { InstructorSectionsResponseDto } from "./instructorSectionsResponseDto";

export interface GetInstructorResponse {
items:InstructorModel;
id:number;
userId:number;
firstName:string;
lastName:string;
imageUrl:string;
email:string;
birthDate:Date;
phoneNumber:string;
biography:string;
title:string;
githubUrl:string;
linkedinUrl:string;
twitterUrl:string;
createdDate:Date;

// students: StudentModel[];
sections: InstructorSectionsResponseDto[];
}