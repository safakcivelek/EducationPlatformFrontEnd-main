import { BaseService } from "./baseService";
import { BASE_API_URL } from "@/environment/environment";
import { getAllLessonResponse } from "@/models/response/Lesson/getAllLessonResponse";
import { getLessonResponse } from "@/models/response/Lesson/getLessonResponse";

class LessonService extends BaseService<getAllLessonResponse, getLessonResponse, any, any, any, any>  {
    constructor() {
        super(BASE_API_URL + "Courses");
    };
};

export default LessonService;