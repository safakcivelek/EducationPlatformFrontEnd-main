export interface StudentRegisterResponse {
    accessToken: {
        token: string;
        expiration: string;
    };
    requiredAuthenticatorType?: string;
}