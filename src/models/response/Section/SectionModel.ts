import { SectionAboutResponseDto } from "./sectionAboutResponseDto";
import { SectionCoursesResponseDto } from "./sectionCoursesResponseDto";
import { SectionInstructorsResponseDto } from "./sectionInstructorsResponseDto";

export interface SectionModel {
    id: string;
    categoryId:string;
    categoryName: string;
    name: string;
    imageUrl: string;
    description: string;
    producerCompany: string | null;
    courseCount: string;
    instructors: SectionInstructorsResponseDto[];
}