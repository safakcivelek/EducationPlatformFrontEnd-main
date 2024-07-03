import { GetUserIdSectionInstructorDto } from "./getUserIdSectionInstructorDto";

export interface GetUserIdSectionDto {
    id:string;
    name:string;
    imageUrl:string;
    categoryId:string;
    categoryName:string;
    courseCount:string;
    instructor: GetUserIdSectionInstructorDto[];
}