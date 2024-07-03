
import Wrapper from "@/layout/DefaultWrapper";
import CourseContentPage from "@/components/course-content/CourseContentPage";
import Breadcrumb from "../../../components/common/breadcrumb/Breadcrumb";

const CourseContentPagePage = ({ params }: { params: { id: string } }) => {
    const id = params.id

    return (
        <Wrapper>
            <main>
                <Breadcrumb title="Eğitim İçeriği" subTitle="" /> 
                <CourseContentPage id={id} />
            </main>
        </Wrapper>
    );
};

export default CourseContentPagePage;