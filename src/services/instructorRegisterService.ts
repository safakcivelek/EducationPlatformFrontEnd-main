import { BaseService } from "./baseService";
import { InstructorRegisterResponse } from "@/models/response/Auth/instructorRegisterResponse";
import { InstructorRegisterRequest } from "@/models/request/Auth/instructorRegisterRequest";
import { BASE_API_URL } from "@/environment/environment";
import axios, { AxiosResponse } from "axios";

export class InstructorRegisterService extends BaseService
<
    any, any,
    InstructorRegisterRequest,
    InstructorRegisterResponse,
    any, any
> {
    constructor () {
        super(BASE_API_URL + "Auth/InstructorRegister");
    }

    instructorRegister(request: InstructorRegisterRequest): Promise<AxiosResponse<InstructorRegisterRequest,any>> {
        return axios.post<any>(this.apiUrl, request, {});
    }
}