import { BaseService } from "./baseService";
import { BASE_API_URL } from "@/environment/environment";
import { getAllClassroomTypeResponse } from "@/models/response/ClassroomType/getAllClassroomTypeResponse";
import { getClassroomTypeResponse } from "@/models/response/ClassroomType/getClassroomTypeResponse";

class ClassroomTypeService extends BaseService<getAllClassroomTypeResponse, getClassroomTypeResponse, any, any, any, any>  {
    constructor() {
        super(BASE_API_URL + "ClassRoomTypes");
    };


};

export default ClassroomTypeService;