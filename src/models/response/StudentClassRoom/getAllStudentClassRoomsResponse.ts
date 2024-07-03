import { StudentClassRoomModel } from "./StudentClassRoomModel";

export interface GetAllStudentClassRoomsResponse {
    items:StudentClassRoomModel[]; 
}

export interface GetAllStudentClassRoomsPaginatedResponse {
    items:StudentClassRoomModel[];
    index: number;
    size: number;
    count: number;
    pages: number;
    hasPrevious: boolean;
    hasNext: boolean;
}