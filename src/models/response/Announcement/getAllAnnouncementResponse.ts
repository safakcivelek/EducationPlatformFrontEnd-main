import { AnnouncementModel } from "./AnnouncementModel";

export interface GetAllAnnouncementResponse {
    items: AnnouncementModel[];
    index: number;
    size: number;
    count: number;
    pages: number;
    hasPrevious: boolean;
    hasNext: boolean;
};
