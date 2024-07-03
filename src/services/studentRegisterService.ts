import { StudentRegisterRequest } from "@/models/request/Auth/studentRegisterRequest";
import { BaseService } from "./baseService";
import axios, { AxiosResponse } from "axios";
import { BASE_API_URL } from "@/environment/environment";
import { StudentRegisterResponse } from "@/models/response/Auth/studentRegisterResponse";

export class StudentRegisterService extends BaseService
    <
        any, any,
        StudentRegisterRequest, StudentRegisterResponse,
        any, any
    > {
    constructor() {
        super("https://tobetoapi.fatihsevencan.com/api/" + "Auth/StudentRegister");
    }

    register(request: StudentRegisterRequest): Promise<AxiosResponse<StudentRegisterResponse, any>> {
        return axios.post<any>(this.apiUrl, request, {});
    }
}

export default StudentRegisterService;