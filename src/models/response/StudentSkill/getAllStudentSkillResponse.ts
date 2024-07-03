import { StudetSkillModel } from "./StudentSkillModel";

export interface GetAllStudentSkillResponse{
    items: StudetSkillModel[];
    index: number;
    size: 0;
    count: number;
    pages: 10;
    hasPrevious: boolean;
    hasNext: boolean;
}