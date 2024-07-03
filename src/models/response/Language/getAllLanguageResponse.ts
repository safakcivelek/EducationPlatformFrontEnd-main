import { LanguageModel } from "./LanguageModel";

export interface GetAllLanguageResponse{
    items: LanguageModel[];
    index: number;
    size: 0;
    count: number;
    pages: 10;
    hasPrevious: boolean;
    hasNext: boolean;
}