"use client"

import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { InstrcutorUpdateRequest } from '@/models/request/Instructor/InstrcutorUpdateRequest';
import InstructorService from '@/services/instructorService';
import { useInstructorProfile } from '@/contextApi/InstructorProfileContext';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import tr from 'date-fns/locale/tr';
import SocialProfileFrom from './social-profile-form';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { date, object, string } from 'yup';
import FormikInput from '@/components/FormikInput/FormikInput';

const InstructorContactForm = () => {

    registerLocale('tr', tr);
    var nameRegex = /^[a-zA-Z]+$/;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var phoneRegex = /^(0|(?:(?<!\d)(?<!00)\+90[\s-]?))?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
    var linkedinRegex = /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/;
    var githubRegex = /^(https?:\/\/)?(www\.)?github\.com\/in\/[a-zA-Z0-9_-]+\/?$/;

    const { instructorProfile } = useInstructorProfile();

    const [birthDate, setBirthDate] = useState(instructorProfile?.birthDate ? new Date(instructorProfile.birthDate) : null);
    const [firstName, setFirstName] = useState(instructorProfile?.firstName || '');
    const [lastName, setLastName] = useState(instructorProfile?.lastName || '');
    const [email, setEmail] = useState(instructorProfile?.email || '');
    const [phoneNumber, setPhoneNumber] = useState(instructorProfile?.phoneNumber || '');
    const [biography, setBiography] = useState(instructorProfile?.biography || '');
    const [githubUrl, setGithubUrl] = useState(instructorProfile?.githubUrl || '');
    const [linkedinUrl, setLinkedinUrl] = useState(instructorProfile?.linkedinUrl || '');
    const [title, setTitle] = useState(instructorProfile?.title || '');


    useEffect(() => {
        setFirstName(instructorProfile?.firstName || '');
        setLastName(instructorProfile?.lastName || '');
        setEmail(instructorProfile?.email || '');
        setPhoneNumber(instructorProfile?.phoneNumber || '');
        setBirthDate(instructorProfile?.birthDate ? new Date(instructorProfile.birthDate) : null);
        setBiography(instructorProfile?.biography || '');
        setGithubUrl(instructorProfile?.githubUrl || '');
        setLinkedinUrl(instructorProfile?.linkedinUrl || '');
        setTitle(instructorProfile?.title || '');

    }, [instructorProfile]);

    const handleSubmit = async (event: any) => {
        //event.preventDefault();

        const service: InstructorService = new InstructorService();

        // Tarih formatını ISO 8601 formatına dönüştür
        const isoBirthDate = birthDate
            ? new Date(birthDate.getTime() - (birthDate.getTimezoneOffset() * 60000)).toISOString().split('T')[0]
            : null;


        const updateInstructorData: InstrcutorUpdateRequest | any = {
            updateInstructorDto: {
                id: instructorProfile?.id || 0,
                firstName,
                lastName,
                email,
                phoneNumber,
                birthDate: isoBirthDate,
                biography,
                linkedinUrl,
                githubUrl,
                imageUrl: instructorProfile?.imageUrl,
                title: instructorProfile?.title
            }
        };

        try {
            const response = await service.instrcutorUpdate(updateInstructorData);
            toast.success('Profil bilgileriniz güncellendi!', {
                autoClose: 1200,
                onClose: () => window.location.reload()
            });
        } catch (error) {
            toast.error('Profil güncellenirken bir hata oluştu!', {
                autoClose: 1200

            });
        }
    };

    const validationSchema = object({

        firstName: string()
            .required('Ad zorunlu')
            .matches(nameRegex, "Geçerli Bir Ad Formatı Giriniz"),

        lastName: string()
            .required('Soyad zorunlu')
            .matches(nameRegex, "Geçerli Bir Soyad Formatı Giriniz"),

        email: string()
            .required("Doldurulması zorunlu alan*")
            .matches(emailRegex, "Geçerli Bir E-Posta Adresi Giriniz"),

        phoneNumber: string()

            .matches(phoneRegex, " '+' veya '00' ile başlayan uluslararası kodu , ardından 3-3-4 haneli üç grup rakam şeklinde giriniz."),

        githubUrl: string()

            .matches(githubRegex, "Geçerli Bir Github Adresi Giriniz"),

        linkedinUrl: string()

            .matches(linkedinRegex, "Geçerli Bir Linkedin Adresi Giriniz")
    });


    return (
        <>
            <Formik
                initialValues={{ phoneNumber: '', linkedinUrl: '', githubUrl: '' }} //ad soyad kısımı neden yok
                onSubmit={handleSubmit}
                validationSchema={validationSchema}>
                {({ errors, touched, handleChange, values }) => (
                    <Form>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="contact-from-input mb-20">
                                    <label htmlFor="FirstName">Ad</label>
                                    <FormikInput
                                        id="FirstName"
                                        name="firstName"
                                        type={firstName ? "text" : "firstName"}
                                        placeholder="Adınızı Giriniz ! "
                                        value={firstName}
                                        onChange={(e: any) => setFirstName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="contact-from-input mb-20">
                                    <label htmlFor="LastName">Soyad</label>
                                    <FormikInput
                                        id="LastName"
                                        name="lastName"
                                        type={lastName ? "text" : "lastName"}
                                        placeholder="Soyadınızı Giriniz ! "
                                        value={lastName}
                                        onChange={(e: any) => setLastName(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="contact-from-input mb-20">
                                    <label htmlFor="Email">Email</label>
                                    <FormikInput
                                        id="Email"
                                        name="email"
                                        value={email}
                                        onChange={(e: any) => setEmail(e.target.value)}
                                        disabled={true}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="contact-from-input mb-20">
                                    <label htmlFor="Phone">Telefon Numarası</label>
                                    <FormikInput
                                        id="Phone"
                                        name="phoneNumber"
                                        type={phoneNumber ? "text" : "phoneNumber"}
                                        placeholder="5XX XXX XX XX Şeklinde Giriniz"
                                        value={phoneNumber}
                                        onChange={(e: any) => setPhoneNumber(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="contact-from-input mb-20">
                                    <label htmlFor="BirthDate">Doğum Tarihi</label>
                                    <DatePicker
                                        locale="tr"
                                        selected={birthDate}
                                        onChange={(date) => setBirthDate(date)}
                                        dateFormat="dd.MM.yyyy"
                                        isClearable={true}
                                        showYearDropdown
                                        scrollableMonthYearDropdown
                                        placeholderText="Doğum Tarihi Seç"
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="contact-from-input mb-20">
                                    <label htmlFor="Linkedn">Linkedin </label>
                                    <FormikInput
                                        id="Linkedin"
                                        name="Linkedin"
                                        type={linkedinUrl ? "text" : "linkedn"}
                                        placeholder="Linkedin linkinizi giriniz ! "
                                        value={linkedinUrl}
                                        onChange={(e: any) => setLinkedinUrl(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="contact-from-input mb-20">
                                    <label htmlFor="Github">Github</label>

                                    <FormikInput
                                        id="gitHub"
                                        name="gitHub"
                                        type={githubUrl ? "text" : "gitHub"}
                                        placeholder="Github linkinizi giriniz ! "
                                        value={githubUrl}
                                        onChange={(e: any) => setGithubUrl(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="contact-from-input mb-20">
                                    <label htmlFor="title">Ünvan</label>
                                    <input
                                        id="title"
                                        type="text"
                                        placeholder="Ünvan"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="contact-from-input mb-20">
                                    <label htmlFor="Bio">Biyografi</label>
                                    <textarea
                                        id="Bio"
                                        placeholder="Biyografi"
                                        value={biography}
                                        onChange={(e) => setBiography(e.target.value)}
                                    ></textarea>
                                </div>
                            </div>

                            <div className="col-sm-12">
                                <div className="contact-from-input mb-20">
                                    <button type="submit" onClick={handleSubmit} className="cont-btn">
                                        Güncelle
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik >
        </>
    );
};

export default InstructorContactForm;