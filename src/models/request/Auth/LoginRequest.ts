export interface LoginRequest {
    email: string;
    password: string;
    authenticatorCode?: string
}