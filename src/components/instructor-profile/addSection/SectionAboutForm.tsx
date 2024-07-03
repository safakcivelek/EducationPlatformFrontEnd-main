import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import ProducerCompanyService from "../../../services/producerCompanyService";
import LanguageService from "../../../services/languageService";
import { ProducerCompanyModel } from "../../../models/response/ProducerCompany/ProducerCompanyModel";
import { LanguageModel } from "../../../models/response/Language/LanguageModel";
interface SectionAboutFormProps {
    sectionId: string;
    onNext: () => void;
}

const SectionAboutForm: React.FC<SectionAboutFormProps> = ({ sectionId, onNext }) => {

    const axiosInstance = axios.create({
        baseURL: 'https://tobetoapi.fatihsevencan.com/api'
    });

    
    if (typeof window !== "undefined") {
        axiosInstance.interceptors.request.use(
            config => {
                const token = localStorage.getItem('accessToken');
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            },
            error => {
                return Promise.reject(error);
            }
        );
    }


    const [producerCompanies, setProducerCompanies] = useState<ProducerCompanyModel[]>([]);
    const [languages, setLanguages] = useState<LanguageModel[]>([]);
    const [sectionAbout, setSectionAbout] = useState({
        ProducerCompanyId: '',
        LanguageId: '',
        Text: '',
        EstimatedDuration: 0,
    });

    useEffect(() => {
        const producerCompanyService = new ProducerCompanyService();
        const languageService = new LanguageService();

        const fetchProducerCompanies = async () => {
            try {
                const response = await producerCompanyService.getAll()
                setProducerCompanies(response.data.items);
            } catch (error) {
                console.error("Producer companies fetching error:", error);
            }
        };

        const fetchLanguages = async () => {
            try {
                const response = await languageService.getAll();
                setLanguages(response.data.items);
            } catch (error) {
                console.error("Languages fetching error:", error);
            }
        };

        fetchProducerCompanies();
        fetchLanguages();
    }, []);



    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setSectionAbout(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const payload = {
            ...sectionAbout,
            SectionId: sectionId,
        };

        try {
            const response = await axiosInstance.post('/SectionAbouts', payload);
            if (response.status === 201) {
                onNext();
            } else {
                throw new Error('Error creating SectionAbout');
            }
        } catch (error) {
            console.error('Error during SectionAbout creation:', error);
        }
    };

    return (
        <div className="main-container">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                  
                    <div className="form-field">
                        <label htmlFor="text">Özet</label>
                        <textarea
                            id="text"
                            name="Text"
                            value={sectionAbout.Text}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-field">
                        <label htmlFor="producerCompanyId">Üretici</label>
                        <select
                            id="producerCompanyId"
                            name="ProducerCompanyId"
                            value={sectionAbout.ProducerCompanyId}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="" disabled selected>Üretici Seçin</option>
                            {producerCompanies.map((company: any) => (
                                <option key={company.id} value={company.id}>
                                    {company.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-field">
                        <label htmlFor="languageId">Dil</label>
                        <select
                            id="languageId"
                            name="LanguageId"
                            value={sectionAbout.LanguageId}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="" disabled selected>Dil Seçin</option>
                            {languages.map((language: any) => (
                                <option key={language.id} value={language.id}>
                                    {language.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-field">
                        <label htmlFor="estimatedDuration">Eğitim Süresi</label>
                        <input
                            id="estimatedDuration"
                            type="number"
                            name="EstimatedDuration"
                            value={sectionAbout.EstimatedDuration}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit" className="form-button">
                       Eğitim Detaylarını Kaydet  <span className="fas fa-arrow-right"></span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SectionAboutForm;