import { SectionModel } from "../Section/SectionModel";

export interface  GetCategorySectionsResponse {

    items: {sections:SectionModel[]}[];
    index: number;
    size: number;
    count: number;
    pages: number;
    hasPrevious: boolean;
    hasNext: boolean;
}

