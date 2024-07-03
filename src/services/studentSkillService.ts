import { StudentSkillsAddRequest } from './../models/request/StudentSkill/StudentSkillsAddRequest';
import { GetAllStudentSkillResponse } from "@/models/response/StudentSkill/getAllStudentSkillResponse";
import { BaseService } from "./baseService";
import { BASE_API_URL } from "@/environment/environment";
import { StudentSkillsAddResponse } from '@/models/response/StudentSkill/StudentSkillsAddResponse';

class StudentSkillService extends BaseService
    <
        GetAllStudentSkillResponse,
        any,
        StudentSkillsAddRequest,
        StudentSkillsAddResponse,
        any,
        any
    >  {
    getSkillsByUserId(userId: any) {
      throw new Error("Method not implemented.");
    }
    constructor() {
        super(BASE_API_URL + "StudentSkills");
    }
}

export default StudentSkillService;