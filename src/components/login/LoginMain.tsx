"use client"
import Image from 'next/image';
import SignUpImg from '../../../public/assets/img/sing-up/sign-up.png';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Form, Formik } from 'formik';
import { LoginService } from '@/services/loginService';
import { object, string } from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import { LoginRequest } from '@/models/request/Auth/LoginRequest';
import FormikInput from '../FormikInput/FormikInput';
import { AxiosError } from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const LoginMain = () => {
    // Durum değişkenleri
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const authService = new LoginService();
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (event: any) => {
        event.preventDefault();
        try {
            const response = await authService.login({ email, password });
            
            success();
            // Token ve son kullanma süresini localStorage'a kaydetme
            localStorage.setItem('accessToken', response.data.accessToken.token);
            localStorage.setItem('tokenExpiration', response.data.accessToken.expiration);

            // Başarılı giriş sonrası ana sayfaya yönlendir
            setTimeout(() => {
                window.location.href = '/';
            }, 1700);

        } catch (error) {
            console.error(error);
            const axiosError = error as AxiosError;
            const message = error.response.data;


            if (axiosError.isAxiosError && axiosError.response === undefined) {
                notify("Sunucu Hatası");
            }
            else if (message.includes("You need to verify your email first")) {
                notify("Önce e-mailinizi doğrulamanız gerekmektedir"); 
            }
            else {
                notify("Geçersiz e-posta veya şifre");
            }
        }
    };

    const notify = (errorMessage: string) => {
        toast.error(`• ${errorMessage}`);
    };

    const validationSchema = object({
        email: string().required("Doldurulması zorunlu alan*"),
        password: string().required("Doldurulması zorunlu alan*"),
    });

    // Şifreyi göster/gizle fonksiyonu
    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const success = () => {
        toast.success('• Giriş başarılı.', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };


    return (
        <>
            {/* <Breadcrumb title='Sign in'  subTitle='Sign in' />  Fotoğraf engellendi*/}
            <div className="signin-page-area pt-120 pb-120">
                <div className="signin-page-area-wrapper">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-10 col-lg-10">
                                <Formik
                                    initialValues={{ email: '', password: '' }}
                                    onSubmit={(initialValues: LoginRequest) => {

                                        handleLogin(initialValues)
                                    }}
                                    validationSchema={validationSchema}
                                >
                                    <form onSubmit={handleLogin} >
                                        <div className="row">
                                            <div className="col-md-5">
                                                <div className="signup-box text-center">
                                                    <div className="signup-text">
                                                        <h3>Giriş Yap</h3>
                                                    </div>
                                                    <div className="signup-thumb">
                                                        <Image src={SignUpImg} style={{ width: '100%', height: 'auto' }} alt="img not found" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-7">
                                                <div className="signup-form-wrapper">
                                                    <div className="signup-wrapper">
                                                        <FormikInput
                                                            name="email"
                                                            type="email"
                                                            placeholder="Email"
                                                            value={email}
                                                            onChange={(e) => {
                                                                setEmail(e.target.value);
                                                            }}
                                                        />
                                                        {/* <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /> */}
                                                    </div>
                                                    <br />
                                                    <div className="signup-wrapper">
                                                        <FormikInput
                                                            name="password"
                                                            type={showPassword ? "text" : "password"}
                                                            placeholder="Şifre"
                                                            value={password}
                                                            onChange={(e) => setPassword(e.target.value)}
                                                        />
                                                        <span onClick={togglePasswordVisibility} className="password-toggle-icon">
                                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                                        </span>
                                                    </div>
                                                    <br></br>
                                                    <div className="button-login-container">
                                                        <button type="submit" className="button-login">Giriş Yap</button>
                                                    </div>
                                                    {/* <ToastContainer /> */}
                                                    <div className="registered wrapper">
                                                        <div className="not-register">
                                                            <Link href="/#">Şifremi Unuttum</Link>
                                                        </div>
                                                    </div>

                                                    <div className="registered wrapper">
                                                        <div className="not-register">
                                                            <span>Henüz Üye Değil Misiniz?<Link href="/student-registration">Üye Ol</Link></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </form>
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </>
    );
};

export default LoginMain;
