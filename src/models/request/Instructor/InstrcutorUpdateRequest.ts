
export interface InstrcutorUpdateRequest {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: string;
    birthDate?: string | null;
    biography?: string;
    githubUrl?: string;  
    linkedinUrl?: string;
    //imageUrl?: string;
    title?: string;
    twitterUrl?: string;

}
