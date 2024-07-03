import React from 'react';
import ExamQuestionTimer from "./ExamQuestionTimer";
import { GetExamForQuestionsResponse } from '@/models/response/Exam/getExamForQuestionsResponse';

interface ExamHeaderProps {
    questionState: GetExamForQuestionsResponse;
    handleTimeUp: () => void;
}
const ExamHeader: React.FC<ExamHeaderProps> = ({ questionState, handleTimeUp }) => {
    return (
        <div className="row pb-20 px-5">
            <div className="col-6"><h4>{questionState?.name}</h4></div>
            <div className="col-6 d-flex justify-content-end">
                <i className="far fa-clock fa-lg mt-2 mr-5"></i>
                <h4>
                    <ExamQuestionTimer
                        onTimeUp={handleTimeUp}
                        time={questionState?.duration}
                        id={questionState?.id}
                    />
                </h4>
            </div>
        </div>
    );
};

export default ExamHeader;
