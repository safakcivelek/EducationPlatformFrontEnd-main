import { Guid } from "guid-typescript";
import { CategoryModel } from "../Category/CategoryModel";
import { CourseModel } from "../Course/CourseModel";
import { SectionAboutDto } from "../SectionAbout/sectionAboutDto";
import { SectionDetailInstructorResponseDto } from "./sectionDetailInstructorResponseDto";
import { ReactNode } from "react";

export interface  getSectionResponse {
id:string;
categoryId:string;
categoryName:string;
name:string;
imageUrl:string;
description:string;
producerCompanyName:string;
languageName:string;
createdDate:string;
totalLike: number;

instructors :  SectionDetailInstructorResponseDto[] | undefined;
sectionAbout:SectionAboutDto;
courses:CourseModel[]  | undefined;
}
