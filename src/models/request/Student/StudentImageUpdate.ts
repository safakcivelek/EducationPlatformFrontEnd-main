export interface StudentImageUpdate {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: string;
    birthDate?: string;
    biography?: string;
    // githubUrl?: string;
    // linkedinUrl?: string;
    imageUrl?: string;
}