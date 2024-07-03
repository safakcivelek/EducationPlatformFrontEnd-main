
import { BaseService } from "./baseService";
import { BASE_API_URL } from "@/environment/environment";
import { GetAllCampusEncounterResponse } from "../models/response/CampusEncounter/getAllCampusEncounterResponse";

class CampusEncounterService extends BaseService<GetAllCampusEncounterResponse, any, any, any, any, any>  {
    constructor() {
        super(BASE_API_URL + "CampusEncounters");

    }
}

export default CampusEncounterService;
