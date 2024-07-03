import { CampusEncounterModel } from "./CampusEncounterModel";


export interface GetAllCampusEncounterResponse{
    items: CampusEncounterModel[];
    index: number;
    size: number;
    count: number;
    pages: number;
    hasPrevious: boolean;
    hasNext: boolean;
}