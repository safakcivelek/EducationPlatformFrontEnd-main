export interface StudentUpdateRequest {
    id: number;
    provinceId: number;
    districtId: number;
    firstName: string;
    lastName: string;
    email: string;
    birthDate?: string;
    phoneNumber?: string;
    biography?: string;
    imageUrl?: string;
    linkedinUrl?: string;
    githubUrl?: string;
}