import { CourseModel } from "../Course/CourseModel";

export interface InstructorSectionsResponseDto {
    id:string;
    categoryName:string;
    name:string;
    imageUrl:string;
    description:string;
    producerCompany:string;
    courseCount:string;
    categoryId: string;
    courses: CourseModel[]; // ihtiyaç olursa Dto olarak kullanılabilir               
}