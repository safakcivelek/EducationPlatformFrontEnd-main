import React, { useEffect, useState } from "react";
import Preloader from "../common/Preloader";
import ErrorComponent from "../errorPage/ErrorComponent";
import ExamConfirmFinishModal from "./ExamConfirmFinishModal";
import ExamHeader from "./ExamHeader";
import NavigationButtons from "./NavigationButtons";
import { useExamQuestions } from "../../hooks/examQuestionHook/useExamQuestions";
import { useExamResult } from "../../hooks/examQuestionHook/useExamResult";
import { useExamManagement } from "../../hooks/examQuestionHook/useExamManagement";


export interface ExamQuestionsContentProps {
    id: string;
}

const ExamQuestionsContent: React.FC<ExamQuestionsContentProps> = ({ id }) => {

    const { userId, questionState, isLoading, error } = useExamQuestions(id);
    const { calculateExamResult, Add } = useExamResult(userId, id);
    const { selectedChoices, setSelectedChoices, handleChoiceChange } = useExamManagement(id, questionState);
    const [currentExamIndex, setCurrentExamIndex] = useState<number>(-1);
    const [showModal, setShowModal] = useState(false);
    const [questionNumber, setQuestionNumber] = useState<number>(1);
    const [timeUp, setTimeUp] = useState(false);

    useEffect(() => {
        if (questionState && !isLoading && !error) {
            // Sorular başarıyla yüklendi, ilk soruya geç
            setCurrentExamIndex(0);
        }
    }, [questionState, isLoading, error]);

    const handleNextQuestion = () => {
        if (currentExamIndex >= 0 && questionState?.questions?.length !== undefined && currentExamIndex < questionState.questions.length - 1) {
            setCurrentExamIndex(prevIndex => prevIndex + 1);
            setQuestionNumber(number => number + 1);
        } else {
            // Soruların sonuna gelindiğinde işle
            setCurrentExamIndex(-1);
        }
    };

    const handlePreviousQuestion = () => {
        if (currentExamIndex > 0) {
            setCurrentExamIndex(prevIndex => prevIndex - 1);
            setQuestionNumber(number => number - 1);
        } else {
            // İlk soruya geri dönüldüğünde işlemler burada yapılabilir.
        }
    };

    // Sayfa Yüklendiğinde Seçimleri Yeniden Yükler
    useEffect(() => {
        const savedChoices = localStorage.getItem(`selectedChoices_${id}`);
        if (savedChoices) {
            setSelectedChoices(JSON.parse(savedChoices));
        }
    }, [id]);

    // timeUp: Sınavın zamanının dolup dolmadığını kontrol eder.
    const handleTimeUp = () => {
        setTimeUp(true);
    };

    useEffect(() => {
        if (timeUp) {
            handleConfirmFinish();
        }
    }, [timeUp]);
    //

    const handleConfirmFinish = async () => {
        Add();
        localStorage.removeItem(`examTime_${id}`);
        localStorage.removeItem(`startTime_${id}`);
        // LocalStorage'dan seçimleri sil
        localStorage.removeItem(`selectedChoices_${id}`);
        window.location.href = "/student-profile";
        setShowModal(false);
    };

    //ShowModal: sınavı tamamlama onayı için modal penceresinin gösterilip gösterilmeyeceğini kontrol eder.
    const handleCancelFinish = () => {
        setShowModal(false);
    };

    const handleFinish = () => {
        setShowModal(true);
    };

    useEffect(() => {
        // Soru ve seçimler güncellendiğinde sonuçları hesapla
        if (questionState?.questions?.length > 0) {
            calculateExamResult(questionState.questions, selectedChoices);
        }
    }, [selectedChoices, questionState, calculateExamResult]);

    // Bu alan seçili inputu tekrar seçince boşa almasını sağlıyor
    const handleRadioClick = (choiceId: string) => {
        const currentQuestionId = questionState?.questions[currentExamIndex]?.id;

        // Eğer tıklanan seçenek zaten seçili ise kaldır
        const isChoiceSelected = selectedChoices.some((item) => item.questionId === currentQuestionId && item.choiceId === choiceId);
        if (isChoiceSelected) {
            handleChoiceChange(currentQuestionId || '', null);
        } else {
            handleChoiceChange(currentQuestionId || '', choiceId);
        }
    };

    return (
        <section className="terms_conditions_section section_space_lg pt-120 pb-60">
            {isLoading ? (
                <Preloader />
            ) : error ? (
                <ErrorComponent error={error} />
            ) : (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tab-content mb-60">
                                <div className="terms_conditions_content">

                                    <ExamHeader
                                        questionState={questionState}
                                        handleTimeUp={handleTimeUp}
                                    />

                                    {questionState && questionState.questions && questionState.questions.length > 0 ? (
                                        <>
                                            <div className="card  mb-40 mr-40 ml-40">
                                                <div className="div1 py-3 px-3 mt-30">
                                                    <div className="text-center d-flex justify-content-start">
                                                        <div >
                                                            <h5 className="ml-50">{questionNumber}</h5>
                                                        </div>
                                                        <h5 className="flex-grow-1 text-center font-weight-bold">{questionState?.questions[currentExamIndex]?.text}</h5>
                                                    </div>

                                                </div>
                                                <div className="div2 py-2 px-4" >
                                                    {/* <hr className="d-flex my-0 mx-4" /> */}
                                                    <div className="px-2 px-md-5 py-2" >
                                                        {questionState?.questions[currentExamIndex]?.choices?.map((choice, index) => (
                                                            <div
                                                                key={index}
                                                                className="custom-radio-container py-2 border mb-20"
                                                                onClick={() => handleRadioClick(choice.id)}
                                                            >
                                                                <input
                                                                    className="custom-radio-input"
                                                                    type="radio"
                                                                    name={`choice-${currentExamIndex}-${index}`}
                                                                    value={choice.id}
                                                                    id={`flexRadioChecked-${index}`}
                                                                    checked={selectedChoices.some(
                                                                        (item) => item.questionId === questionState?.questions[currentExamIndex]?.id && item.choiceId === choice.id
                                                                    )}
                                                                    onChange={() => handleRadioClick(choice.id)}
                                                                />
                                                                <label className="custom-radio-label" htmlFor={`flexRadioChecked-${index}`} onClick={() => handleRadioClick(choice.id)}>
                                                                    {choice.text}
                                                                </label>
                                                            </div>
                                                        ))}
                                                        <div>
                                                            <NavigationButtons
                                                                currentExamIndex={currentExamIndex}
                                                                questionLength={questionState.questions.length}
                                                                handleNextQuestion={handleNextQuestion}
                                                                handlePreviousQuestion={handlePreviousQuestion}
                                                                handleFinish={handleFinish}
                                                            />

                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <ExamConfirmFinishModal
                                                showModal={showModal}
                                                handleCancelFinish={handleCancelFinish}
                                                handleConfirmFinish={handleConfirmFinish}
                                            />
                                        </>
                                    ) : (
                                        <p>Yükleniyor...</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
        </section >
    );
};

export default ExamQuestionsContent;
