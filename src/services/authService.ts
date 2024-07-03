import { AxiosResponse } from "axios";
import { BaseService } from "./baseService";
import { LoginRequest } from '../models/request/Auth/LoginRequest';
import { BASE_API_URL } from "@/environment/environment";
import { LoginResponse } from "@/models/response/Auth/LoginModel";
export class AuthService extends BaseService<any, any, LoginRequest, LoginResponse, any, any> {
    constructor() {
        super(BASE_API_URL + "Auth/Login");
    }

    login(request: LoginRequest): Promise<AxiosResponse<LoginResponse, any>> {
        
        return this.add(request).then(response => ({
            ...response,
            data: response.data as unknown as LoginResponse
        }));
    }
}

export default AuthService;