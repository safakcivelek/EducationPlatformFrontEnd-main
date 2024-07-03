import { GetAllCourseResponse } from '@/models/response/Course/getAllCourseResponse';
import { BaseService } from "./baseService";
import { BASE_API_URL } from "@/environment/environment";

class CourseService extends BaseService<GetAllCourseResponse, any, any, any, any, any>  {
    constructor() {
        super(BASE_API_URL + "Courses");
    }
}

export default new CourseService();


