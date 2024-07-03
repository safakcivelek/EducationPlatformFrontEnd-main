export interface InstructorRegisterResponse {
    accessToken: {
        token: string;
        expiration: string;
    };
    requiredAuthenticatorType?: string;
}