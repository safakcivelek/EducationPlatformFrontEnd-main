import { GetAllAnnouncementResponse } from "@/models/response/Announcement/getAllAnnouncementResponse";
import { BaseService } from "./baseService";
import { BASE_API_URL } from "@/environment/environment";

class AnnouncementService extends BaseService<GetAllAnnouncementResponse,any,any,any,any,any>  {
    constructor(){
        super(BASE_API_URL + "Announcements");
    }
}

export default AnnouncementService;