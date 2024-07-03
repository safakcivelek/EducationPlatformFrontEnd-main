import { Guid } from "guid-typescript";

export interface GetStudentSkillResponse{
    id: Guid;
    studentId: number;
    skillId: Guid;
}