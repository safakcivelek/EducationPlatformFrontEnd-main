import { GetAllSectionAboutResponse } from "@/models/response/SectionAbout/getAllSectionAboutResponse";
import { BaseService } from "./baseService";
import { BASE_API_URL } from "@/environment/environment";
import { getAllSearchResponse } from "@/models/response/Search/getAllSearchResponse";
import axios from "axios";

class SearchService extends BaseService<getAllSearchResponse,any, any, any, any, any>  {
    constructor(){
        super(BASE_API_URL + "Sections");
    }

    getSearchSections(searchTerm:any, pageIndex :any, pageSize :any) {
        const params = new URLSearchParams({ PageIndex: pageIndex, PageSize: pageSize, searchTerm: searchTerm });
   
        return axios.get(`${this.apiUrl}/search?${params}`);
    }
}

export default SearchService;