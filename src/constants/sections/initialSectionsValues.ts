import { GetAllSectionsPaginatedResponse } from "@/models/response/Section/getAllSectionsPaginatedResponse";

export const initialSectionsValues: GetAllSectionsPaginatedResponse = {
    items: [],
    index: 0,
    size: 0,
    count: 0,
    pages: 0,
    hasPrevious: false,
    hasNext: false
};