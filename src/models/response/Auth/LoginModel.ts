export interface LoginResponse {
    accessToken: {
        token: string;
        expiration: string;
    };
    requiredAuthenticatorType?: string;
}