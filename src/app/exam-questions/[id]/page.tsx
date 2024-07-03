import React from 'react';
import ExamQuestionsMain from "@/components/examQuestions/ExamQuestionsMain";
import Wrapper from "@/layout/DefaultWrapper";


const ExamQuestionsPage = ({ params }: { params: { id:string } }) => {
    const id = params.id

    return (
        <Wrapper>
            <main>
                <ExamQuestionsMain id={id} />
            </main>
        </Wrapper>
    );
};

export default ExamQuestionsPage;