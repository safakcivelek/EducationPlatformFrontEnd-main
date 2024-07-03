export interface InstructorRegisterRequest {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    //repeatPassword: string;
    authenticatorCode?: string;
    checkbox?:boolean;
}