import { SectionInstructorsResponseDto } from "../Section/sectionInstructorsResponseDto";


export interface SearchnModel {
    id: string;
    categoryId:string;
    categoryName: string;
    name: string;
    imageUrl: string;
    instructors: SectionInstructorsResponseDto[];
}