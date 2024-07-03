import { GetAllStudentClassRoomsResponse } from "@/models/response/StudentClassRoom/getAllStudentClassRoomsResponse";
import { BaseService } from "./baseService";
import { BASE_API_URL } from "@/environment/environment";

class StudentClassRoomService extends BaseService<GetAllStudentClassRoomsResponse,any,any,any,any,any>  {
    constructor(){
        super(BASE_API_URL + "Students");
    }
}

export default StudentClassRoomService;
