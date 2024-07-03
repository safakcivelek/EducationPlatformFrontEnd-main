import React from 'react';

interface NavigationButtonsProps {
    currentExamIndex: number;
    questionLength: number;
    handleNextQuestion: () => void;
    handlePreviousQuestion: () => void;
    handleFinish: () => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
    currentExamIndex,
    questionLength,
    handleNextQuestion,
    handlePreviousQuestion,
    handleFinish
}) => {

    return (
        <div className="mt-3 d-flex justify-content-between mb-30">
            <button
                className={`btn btn-primary ${currentExamIndex === 0 ? 'disabledButton' : ''}`}
                style={currentExamIndex === 0 ? { pointerEvents: 'none', opacity: 0.5 } : {}}
                onClick={handlePreviousQuestion}
            >
                <i className="fal fa-angle-double-left"></i>
                <span> Geri</span>
            </button>

            {currentExamIndex === questionLength - 1 ? (
                <button className="btn btn-danger" onClick={handleFinish}>
                    Sınavı Tamamla
                </button>
            ) : (
                <button className="btn btn-primary" onClick={handleNextQuestion}>
                    <span>İleri </span>
                    <i className="fal fa-angle-double-right"></i>
                </button>
            )}
        </div>
    );
};

export default NavigationButtons;