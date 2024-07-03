import axios, { AxiosResponse } from "axios";
import { BaseService } from "./baseService";
import { LoginRequest } from '../models/request/Auth/LoginRequest';
import { BASE_API_URL } from "@/environment/environment";
import { LoginResponse } from "@/models/response/Auth/LoginModel";

export class LoginService extends BaseService<any, any, LoginRequest, LoginResponse, any, any> {
    constructor() {
        super(BASE_API_URL + "Auth/Login");
    }

    login(request: LoginRequest): Promise<AxiosResponse<LoginResponse, any>> {
        let token = null; 
        if (typeof window !== 'undefined') {
            token = localStorage.getItem('accessToken'); 
        }

        return axios.post<any>(this.apiUrl, request, {
            headers: {
                Authorization: token
            }
        });
    }

}

export default LoginService;