import { MentorShipResponseModel } from "./MentorShipResponseModel";

export interface GetAllMentorShipResponse{
    items: MentorShipResponseModel[];
    index: number;
    size: number;
    count: number;
    pages: number;
    hasPrevious: boolean;
    hasNext: boolean;
}