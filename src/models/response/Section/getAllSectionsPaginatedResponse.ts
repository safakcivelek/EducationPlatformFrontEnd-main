import { SectionModel } from "./SectionModel";

export interface GetAllSectionsPaginatedResponse {
    
    items:SectionModel[];
    index: number;
    size: number;
    count: number;
    pages: number;
    hasPrevious: boolean;
    hasNext: boolean;
}