import CourseDetailsMain from "@/components/course-details/CourseDetailsMain";
import Wrapper from "@/layout/DefaultWrapper";

const  CourseDetailsPage = () => {
  const id = 1
  return (
    <>
      <Wrapper>
        <main>
       <CourseDetailsMain id={id.toString()}/>
        </main>
      </Wrapper>
    </>
  );
}

export default CourseDetailsPage;