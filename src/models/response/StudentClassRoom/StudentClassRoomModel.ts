import { Guid } from "guid-typescript";

export interface StudentClassRoomModel {
    id: Guid;
    classRoomId: Guid;
    studentId: number;
}