import { GetAllStudentModel } from "../Student/getAllStudentsResponse";

export interface DistrictModel {
    id: number;
    value: any;
    label: string;
    provinceId: number;
    name: string;
    students: GetAllStudentModel[];
}