import { CertificateModel } from "./CertificateModel";

export interface GetAllCertificatesResponse {
    items: CertificateModel[];   
    // tüm liste , sayfalama yok!
}

export interface GetAllCertificatesPaginatedResponse {
    items: CertificateModel[];
    index: number;
    size: number;
    count: number;
    pages: number;
    hasPrevious: boolean;
    hasNext: boolean;
    // sayfalama ve tüm liste.
}