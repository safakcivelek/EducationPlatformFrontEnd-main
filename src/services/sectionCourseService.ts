import { BaseService } from "./baseService";
import { BASE_API_URL } from "@/environment/environment";
import { GetAllSectionCourseResponse } from "@/models/response/SectionCourse/getAllSectionCourseResponse";

class SectionCourseService extends BaseService<GetAllSectionCourseResponse, any, any, any, any, any>  {
    constructor() {
        super(BASE_API_URL + "SectionCourses");
    }
}

export default SectionCourseService;