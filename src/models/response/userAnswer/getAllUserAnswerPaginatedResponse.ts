import { UserAnswerModel } from "./userAnswerModel";

export interface GetAllUserAnswerPaginatedResponse{
    items: UserAnswerModel[];
    index: number;
    size: number;
    count: number;
    pages: number;
    hasPrevious: boolean;
    hasNext: boolean;
}
