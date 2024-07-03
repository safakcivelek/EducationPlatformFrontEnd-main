import { LikeModel } from "./LikeModel";

export interface GetAllLikeResponse {
    items: LikeModel[];
    index: number;
    size: number;
    count: number;
    pages: number;
    hasPrevious: boolean;
    hasNext: boolean;
}
