import { SearchnModel } from "./SearchModel";

export interface getAllSearchResponse {
    
    items:SearchnModel[];
    index: number;
    size: number;
    count: number;
    pages: number;
    hasPrevious: boolean;
    hasNext: boolean;
}