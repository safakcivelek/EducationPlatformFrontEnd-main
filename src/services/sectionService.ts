import { BaseService } from "./baseService";
import { BASE_API_URL } from "@/environment/environment";
import { GetAllSectionsPaginatedResponse } from "@/models/response/Section/getAllSectionsPaginatedResponse";
import { getSectionResponse } from "@/models/response/Section/getSectionResponse";


class SectionService extends BaseService<GetAllSectionsPaginatedResponse, getSectionResponse, any, any, any, any>  {
    constructor() {
        super(BASE_API_URL + "Sections");
    }
}

export default SectionService;