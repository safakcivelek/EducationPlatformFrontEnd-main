"use client"
import React, { useState } from 'react';
import SignUpMassageImg from '../../../public/assets/img/sing-up/sign-up-message.png';
import SignUpImg from '../../../public/assets/img/sing-up/sign-up.png';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { boolean, object, string } from 'yup';
import FormikInput from '../FormikInput/FormikInput';
import { AxiosError } from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { InstructorRegisterService } from '@/services/instructorRegisterService';
import { InstructorRegisterRequest } from '@/models/request/Auth/instructorRegisterRequest';
import { error } from 'console';
import { checkbox } from '@nextui-org/react';


const InstructorRegistrationSection = () => {

    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    const instructorRegisterService = new InstructorRegisterService();
    const handleRegister = async (event: any) => {
        //event.preventDefault();
        try {
            const response = await instructorRegisterService.instructorRegister({ firstName: event.firstName, lastName: event.lastName, email: event.email, password: event.password });
            success();
            setTimeout(() => {
                window.location.href = '/login';
            }, 1700);

        } catch (error) {
            const axiosError = error as AxiosError;

            if (axiosError.isAxiosError && axiosError.response === undefined) {
                notify("Sunucu Hatası");
            }
        }
    };

    const validationSchema = object({
        firstName: string().required("Doldurulması zorunlu alan*"),
        lastName: string().required("Doldurulması zorunlu alan*"),
        email: string()
            .required("Doldurulması zorunlu alan*")
            .matches(emailRegex, "Geçerli bir e-posta adresi giriniz"),
        password: string()
            .required("Parola Alanı Zorunludur*")
            .matches(passwordRegex, "Şifre en az bir büyük harf, bir küçük harf içermeli ve en az 6 karakter uzunluğunda olmalıdır."),
        checkbox: boolean()
            .required("Lütfen tüm alanları eksiksiz doldurun")
            .oneOf([true], "Lütfen tüm alanları eksiksiz doldurun")
    });


    const notify = (errorMessage: string) => {
        toast.error(`• ${errorMessage}`, {
            position: "top-right", autoClose: 1000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light",
        });
    };

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const success = () => {
        toast.success('• Kayıt başarılı.', {
            position: "top-right", autoClose: 1000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light",
        });
    };

    return (
        <>
            <div className="signup-page-area pt-120 pb-120">
                <div className="signup-page-area-wrapper">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-10 col-lg-10">
                                <Formik
                                    initialValues={{ firstName: '', lastName: '', email: '', password: '', checkbox: false }}
                                    onSubmit={(values) => {

                                        handleRegister(values)
                                    }}
                                    validationSchema={validationSchema}>
                                    {({ isValid, setFieldValue, handleChange, values, errors, touched }) => (
                                        <Form>
                                            <div className="row">
                                                <div className="col-md-5">
                                                    <div className="signup-box text-center">
                                                        <div className="signup-text">
                                                            <h3>Eğitmen Üyelik Formu</h3>
                                                            <p style={{ marginBottom: "80px" }}>Global eğitmen topluluğumuza katılmak ister misiniz? Kayıt formunu doldurun. Ekibimiz sonraki adımları görüşmek üzere sizinle iletişime geçecektir.</p>
                                                        </div>
                                                        <div className="signup-message">
                                                            <Image src={SignUpMassageImg} style={{ width: 'auto', height: 'auto' }} alt="img not found" />
                                                        </div>
                                                        <div className="signup-thumb">
                                                            <Image src={SignUpImg} style={{ width: '100%', height: 'auto' }} alt="img not found" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-7">
                                                    <div className="signup-form-wrapper">
                                                        <div className="signup-wrapper">
                                                        <label htmlFor="Current">Adınız</label>
                                                            <FormikInput
                                                                name="firstName"
                                                                type="text"
                                                                placeholder="Ad"
                                                                value={values.firstName}
                                                                onChange={(e) => {
                                                                    setFieldValue("firstName", e.target.value);
                                                                }}
                                                            />
                                                        </div>
                                                        <br />
                                                        <div className="signup-wrapper">
                                                        <label htmlFor="Current">Soyadınız</label>
                                                            <FormikInput
                                                                name="lastName"
                                                                type="text"
                                                                placeholder="Soyad"
                                                                value={values.lastName}
                                                                onChange={(e) => {
                                                                    setFieldValue("lastName", e.target.value);
                                                                }}
                                                            />
                                                        </div>
                                                        <br />
                                                        <div className="signup-wrapper">
                                                        <label htmlFor="Current">Emailiniz</label>
                                                            <FormikInput
                                                                name="email"
                                                                type="email"
                                                                placeholder="Email"
                                                                value={values.email}
                                                                onChange={(e) => {
                                                                    setFieldValue("email", e.target.value);
                                                                }}
                                                            />
                                                        </div>
                                                        <br />
                                                        <div className="signup-wrapper"> 
                                                        <label htmlFor="Current">Şifreniz</label>
                                                            <Field
                                                                name="password"
                                                                type={showPassword ? "text" : "password"}
                                                                placeholder="Şifre"
                                                                className="register-password-field"
                                                            />
                                                            <button
                                                                type="button"
                                                                onClick={togglePasswordVisibility}
                                                                className="register-toggle-password-button"
                                                            >
                                                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                                                            </button>
                                                            <ErrorMessage name="password" component="div" className="input-feedback" />
                                                        </div>
                                                        <br />
                                                        <div className="signup-action">
                                                            <div className="course-sidebar-list cwarning-message">
                                                                <FormikInput
                                                                    name="checkbox"
                                                                    type="checkbox"
                                                                    value=" "
                                                                    checked={values.checkbox}
                                                                    onChange={(e) => setFieldValue("checkbox", e.target.checked)}
                                                                />
                                                                <label className="sign-check" htmlFor="sing-up"><span>Kayıt oluşturmak için gerekli <Link href="#">Sözleşmeler</Link></span></label>
                                                            </div>
                                                        </div>
                                                        <div className="button-login-container mb-20">
                                                            <button type='submit' className="button-login" disabled={!isValid}>Kayıt Ol</button>
                                                        </div>
                                                        <div className="acount-login text-center">
                                                            <span>Bir hesabın var mı ? <Link href="/login">Giriş Yap</Link></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InstructorRegistrationSection;