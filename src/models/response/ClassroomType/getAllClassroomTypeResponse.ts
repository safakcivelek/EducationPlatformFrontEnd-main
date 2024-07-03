import { ClassroomTypeModel } from "./ClassroomTypeModel";

export interface  getAllClassroomTypeResponse {
    items: ClassroomTypeModel[];
    index: number;
    size: 0;
    count: number;
    pages: 10;
    hasPrevious: boolean;
    hasNext: boolean;
}