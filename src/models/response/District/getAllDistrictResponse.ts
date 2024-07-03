import { DistrictModel } from "./DistrictModel";

export interface GetAllDistrictResponse {
    items:DistrictModel[];
    index: number;
    size: number;
    count: number;
    pages: number;
    hasPrevious: boolean;
    hasNext: boolean;
}