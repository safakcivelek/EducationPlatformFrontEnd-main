import { Guid } from "guid-typescript";

export interface SurveyModel {
    id: Guid
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    formUrl : string
    // CreatedDate : Date
    // UpdateDate: Date
}
