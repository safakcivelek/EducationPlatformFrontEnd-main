import { BASE_API_URL } from "@/environment/environment";
import { BaseService } from "./baseService";
import { GetAllMentorShipResponse } from "@/models/response/MentorShipSession/getAllMentorShipResponse";

 class MentorShipSessionService extends BaseService<GetAllMentorShipResponse,any,any,any,any,any>{
    constructor(){
        super(BASE_API_URL + "MentorshipSessions")
    }
}

export default MentorShipSessionService;