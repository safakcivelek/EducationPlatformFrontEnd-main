
import { SetStateAction, useState } from "react";
import SectionForm from "./SectionForm";
import SectionAboutForm from "./SectionAboutForm";
import CourseForm from "./CourseForm";

const AddSectionPage = () => {
    const [activeStep, setActiveStep] = useState('section');
    const [sectionId, setSectionId] = useState<string | null>(null);

    const handleSetSectionId = (id: string) => {
        setSectionId(id);
    };

    const renderActiveStep = () => {
        switch (activeStep) {
            case 'section':
                return <SectionForm onNext={() => setActiveStep('sectionAbout')} setSectionId={handleSetSectionId} />;
            case 'sectionAbout':
                if (sectionId) {
                    return <SectionAboutForm sectionId={sectionId} onNext={() => setActiveStep('course')} />;
                } else {
                    return (
                        <>
                           
                            <div className="add-section-error-text">
                                *Önce Eğitim Oluşturmanız Gerekmektedir.</div>
                        </>
                    );
                }
            case 'course':
                if (sectionId) {
                    return <CourseForm sectionId={sectionId} />;
                } else {
                    return (
                        <>
        
                            <div className="add-section-error-text">
                                *Önce Eğitim Detayı Oluşturmanız Gerekmektedir.</div>
                        </>
                    );
                }
            
        }
    };
    return (
        <div className="main-container">
            <div className="form-navigation">
                <button className={activeStep === 'section' ? 'nav-button active' : 'nav-button'}
                    onClick={() => setActiveStep('section')}>Genel Bilgiler</button>
                <button className={activeStep === 'sectionAbout' ? 'nav-button active' : 'nav-button'}
                    onClick={() => setActiveStep('sectionAbout')}>Eğitim Detayı</button>
                <button className={activeStep === 'course' ? 'nav-button active' : 'nav-button'}
                    onClick={() => setActiveStep('course')}>Kurs Ekle</button>
              
            </div>
            <div className="">
                {renderActiveStep()}
            </div>
        </div>
    );
};

export default AddSectionPage;