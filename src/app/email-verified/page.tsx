
import Wrapper from "@/layout/DefaultWrapper";
import EmailVerified from "../../components/emailVerified/EmailVerified";
import Breadcrumb from "../../components/common/breadcrumb/Breadcrumb";



const EmailVerifiedPage = () => {
    const id = 1
    return (
        <>
            <Wrapper>
                <main>
                    <Breadcrumb title="E-posta Doğrulama" subTitle="" /> 
                    <EmailVerified  />
                </main>
            </Wrapper>
        </>
    );
}

export default EmailVerifiedPage;