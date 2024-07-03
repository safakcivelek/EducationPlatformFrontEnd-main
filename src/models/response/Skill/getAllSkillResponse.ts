import { SkillModel } from "./SkillModel";

export interface GetAllSkillResponse{
    items: SkillModel[];
    index: number;
    size: number;
    count: number;
    pages: number;
    hasPrevious: boolean;
    hasNext: boolean;
}
