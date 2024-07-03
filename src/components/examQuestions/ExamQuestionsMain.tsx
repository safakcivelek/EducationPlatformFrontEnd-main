"use client";
import { useState } from "react";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import ExamQuestionsContent from "./ExamQuestionsContent";

interface ExamQuestionsMainProps {
    id: string;
}
const ExamQuestionsMain = ({ id }: ExamQuestionsMainProps) => {

    return (
        <>
            <Breadcrumb title="Sınav" subTitle="Sınav" />
            <ExamQuestionsContent id={id} />
        </>
    );
};

export default ExamQuestionsMain;