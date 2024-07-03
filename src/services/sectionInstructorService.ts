import { BaseService } from "./baseService";
import { BASE_API_URL } from "@/environment/environment";
import { GetAllSectionInstructorResponse } from "@/models/response/SectionInstructor/getAllSectionInsturctorResponse";

class SectionInstructorService extends BaseService<GetAllSectionInstructorResponse, any, any, any, any, any>  {
    constructor() {
        super(BASE_API_URL + "SectionInstructors");
    }
}

export default SectionInstructorService;