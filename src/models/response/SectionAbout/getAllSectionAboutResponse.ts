import { SectionAboutModel } from "./SectionAboutModel";

export interface GetAllSectionAboutResponse{
    items: SectionAboutModel[];
    index: number;
    size: 0;
    count: number;
    pages: 10;
    hasPrevious: boolean;
    hasNext: boolean;
}