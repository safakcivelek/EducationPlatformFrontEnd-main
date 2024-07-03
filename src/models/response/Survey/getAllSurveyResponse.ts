import { SurveyModel } from "./SurveyModel";

export interface GetAllSurveyResponse {
    items: SurveyModel[];
    index: number;
    size: 0;
    count: number;
    pages: 10;
    hasPrevious: boolean;
    hasNext: boolean;
}