
export interface StudentUpdateResponse {
   
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: string;
    birthDate?: string | null;
    biography?: string;
    imageUrl?: string;  
    provinceId: number | undefined;
    districtId: number | undefined;
}
