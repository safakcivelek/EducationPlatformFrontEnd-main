import { Guid } from "guid-typescript";

export interface CertificateModel {
    id?: string; // PK
    studentId: number; // FK
    // name: string; // 'name' => backEnd response dto'sunda mevcut değil!
    image: string;
}