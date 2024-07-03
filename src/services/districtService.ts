import { BaseService } from "./baseService";
import { BASE_API_URL } from "@/environment/environment";
import { GetAllDistrictResponse } from "@/models/response/District/getAllDistrictResponse";
import axios, { AxiosResponse } from "axios";

class DistrictService extends BaseService<GetAllDistrictResponse, any, any, any, any, any>  {
    constructor() {
        super(BASE_API_URL + "Districts");
    }

    getDistrictsByProvince(provinceId: number, page: string = "0", pageSize: string = "1000"): Promise<AxiosResponse<GetAllDistrictResponse, any>> {
        const params = new URLSearchParams({ page, pageSize });
         return axios.get<GetAllDistrictResponse>(`${this.apiUrl}/${provinceId}/districts?${params}`);
    }
}

export default DistrictService;