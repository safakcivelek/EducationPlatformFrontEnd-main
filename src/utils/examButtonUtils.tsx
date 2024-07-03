import { GetStudentExamsListDto } from "@/models/response/Student/Exam/getStudentExamsListDto";

export const getButtonLabel = (exam: GetStudentExamsListDto): JSX.Element | string => {
    const examTime = localStorage.getItem(`examTime_${exam.id}`);
    const examEndDate = new Date(exam.endDate);
    const now = new Date();
    const hasTotalScore = exam.userAnswers.some(answer => answer.totalScore !== undefined);

    if (!hasTotalScore && examEndDate >= now) {
        return examTime
            ? <span><i className="fas fa-exclamation-triangle"></i> Sınava Devam Et</span>
            : "Sınava Başla";
    } else if (!hasTotalScore && examEndDate < now) {
        return "Sınava Girmediniz";
    } else {
        return "Raporu Görüntüle";
    }
};

export const getButtonClass = (exam: GetStudentExamsListDto): string => {
    const examEndDate = new Date(exam.endDate);
    const now = new Date();
    const hasTotalScore = exam.userAnswers.some(answer => answer.totalScore !== undefined);

    if (examEndDate < now && !hasTotalScore) {
        return "get-btn-exam1"; // Sınav bitmemiş ve totalScore yoksa
    } else if (hasTotalScore) {
        return "get-btn-exam2"; // Sınav bitmemiş ve totalScore varsa
    } else {
        return "get-btn-exam3"; // Sınav bitmişse
    }
};

export const isButtonDisabled = (exam: GetStudentExamsListDto): boolean => {
    const examEndDate = new Date(exam.endDate);
    const now = new Date();
    return examEndDate < now && !exam.userAnswers.some(answer => answer.totalScore !== undefined);
};