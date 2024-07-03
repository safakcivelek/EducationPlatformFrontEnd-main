import { ProvinceModel } from "./ProvinceModel";

export interface GetAllProvinceResponse {
    items:ProvinceModel[];
    index: number;
    size: number;
    count: number;
    pages: number;
    hasPrevious: boolean;
    hasNext: boolean;
}