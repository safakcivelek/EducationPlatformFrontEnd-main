import { Guid } from "guid-typescript";

export interface GetASectionAboutResponse{
    id: Guid;
    studentId: number;
    skillId: Guid;
}