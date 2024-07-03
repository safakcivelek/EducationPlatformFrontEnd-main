import { StudentModel } from "./StudentModel";

export interface GetAllStudentsResponse {
    items: StudentModel[];
}

export interface GetAllStudentsPaginatedResponse {
    items: GetAllStudentModel[];
    index: number;
    size: number;
    count: number;
    pages: number;
    hasPrevious: boolean;
    hasNext: boolean;
}

export interface GetAllStudentModel{
    id: number;
    userId: number;

    prvinceId: number;
    districtId: number;

    firstName: string;
    lastName: string;
    email: string;
    imageUrl: string;
    birthDate?: Date;
    phoneNumber?: string;
    biography?: string;
    githubUrl?: string;
    linkedinUrl?: string;
}