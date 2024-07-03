import { CertificateModel } from "./CertificateModel";

export interface GetCertificateDetailResponse {
    items: CertificateModel; 
    // tek bir sertifika detayı
    // kullanıcılar için
}

export interface GetAdminCertificateDetailResponse {
    items: CertificateModel;
    CreatedDate: Date;
    UpdatedDate: Date;
    // tek bir sertifika detayı
    // admin için
}