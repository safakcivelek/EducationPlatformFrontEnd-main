import { GetAllCategoryResponse } from "@/models/response/Category/getAllCategoryResponse";
import { BaseService } from "./baseService";
import { BASE_API_URL } from "@/environment/environment";
import { GetCategorySectionsResponse } from "@/models/response/Category/getCategorySectionsResponse";
import axios, { AxiosResponse } from "axios";

class CategoryService extends BaseService<GetAllCategoryResponse,GetCategorySectionsResponse,any,any,any,any>  {
    constructor(){
        super(BASE_API_URL + "Categories");

    }

    getSectionsByCategoryId(categoryId: string, page = "0", pageSize = "100"): Promise<AxiosResponse<GetCategorySectionsResponse>> {
        const url = `${this.apiUrl}/${categoryId}/sections?PageIndex=${page}&PageSize=${pageSize}`;
        return axios.get<GetCategorySectionsResponse>(url)
        .catch(error => {
            throw new Error("Kategorilere ait eğitimler yüklenirken bir hata oluştu.");
        });
    }
}

export default CategoryService;
