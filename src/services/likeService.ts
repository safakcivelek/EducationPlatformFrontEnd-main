import { BASE_API_URL } from "@/environment/environment";
import { BaseService } from "./baseService";
import { GetAllLikeResponse } from "@/models/response/Like/GetAllLikeResponse";
import { LikeAddRequest } from "@/models/request/Like/LikeAddRequest";
import axios, { AxiosResponse } from "axios";
import { LikeAddResponse } from "@/models/response/Like/LikeAddResponse";
import { CheckLikeStatusResponse } from "@/models/response/Like/CheckLikeStatusResponse";
import { CheckLikeStatusRequest } from "@/models/request/Like/CheckLikeStatusRequest";

class LikeService extends BaseService
    <
        GetAllLikeResponse,
        any,
        LikeAddRequest,
        LikeAddResponse,
        any,
        any
    >  {
    constructor() {
        super(BASE_API_URL + "Likes");
    }

    checkLikeStatus(request: CheckLikeStatusRequest): Promise<AxiosResponse<CheckLikeStatusResponse>> {
        const url = `${this.apiUrl}/check-like-status`;
        return axios.get<CheckLikeStatusResponse>(url, {
            params: {
                userId: request.userId,
                sectionId: request.sectionId
            }
        });
    }

    addLike(request: LikeAddRequest): Promise<AxiosResponse<LikeAddResponse>> {
        return axios.post<LikeAddResponse>(this.apiUrl, request);
    }

}

export default LikeService;