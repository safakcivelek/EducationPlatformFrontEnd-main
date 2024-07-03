"use client"

import { useStudentProfile } from '../contextApi/StudentProfileContext';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import StudentService from '@/services/studentService';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import tr from 'date-fns/locale/tr';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { date, object, string } from 'yup';
import FormikInput from '@/components/FormikInput/FormikInput';
import Select, { SingleValue } from "react-select";
import ProvinceService from '@/services/provinceService';
import DistrictService from '@/services/districtService';
import { ProvinceModel } from '@/models/response/Province/ProvinceModel';
import { DistrictModel } from '@/models/response/District/DistrictModel';
import { StudentUpdateRequest } from '@/models/request/Student/StudentUpdateRequest';



const StudentContactForm = () => {

    registerLocale('tr', tr);
    var nameRegex = /^[a-zA-Z]+$/;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var phoneRegex = /^(0|(?:(?<!\d)(?<!00)\+90[\s-]?))?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
    var linkedinRegex = /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/;
    var githubRegex = /^(https?:\/\/)?(www\.)?github\.com\/in\/[a-zA-Z0-9_-]+\/?$/;

    const { studentProfile } = useStudentProfile();

    const [firstName, setFirstName] = useState(studentProfile?.firstName || '');
    const [lastName, setLastName] = useState(studentProfile?.lastName || '');
    const [email, setEmail] = useState(studentProfile?.email || '');
    const [phoneNumber, setPhoneNumber] = useState(studentProfile?.phoneNumber || '');
    const [birthDate, setBirthDate] = useState(studentProfile?.birthDate
        ? new Date(studentProfile.birthDate)
        : null);
    const [biography, setBiography] = useState(studentProfile?.biography || '');
    const [linkedinUrl, setLinkedinUrl] = useState(studentProfile?.linkedinUrl || '');
    const [githubUrl, setGithubUrl] = useState(studentProfile?.linkedinUrl || '');
    const [provinces, setProvinces] = useState<ProvinceModel[]>([]);
    const [districts, setDistricts] = useState<DistrictModel[]>([]);
    const [selectedProvince, setSelectedProvince] = useState<number | undefined>(studentProfile?.provinceId);
    const [selectedDistrict, setSelectedDistrict] = useState<number | undefined>(studentProfile?.districtId);

    useEffect(() => {
        if (studentProfile) {
            setFirstName(studentProfile.firstName || '');
            setLastName(studentProfile.lastName || '');
            setEmail(studentProfile.email || '');
            setPhoneNumber(studentProfile.phoneNumber || '');
            setBirthDate(studentProfile.birthDate ? new Date(studentProfile.birthDate) : null);
            setBiography(studentProfile.biography || '');
            setGithubUrl(studentProfile.githubUrl || '');
            setLinkedinUrl(studentProfile.linkedinUrl || '');
            setSelectedProvince(studentProfile.provinceId);
            setSelectedDistrict(studentProfile.districtId);
        }
    }, [studentProfile]);




    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const service: StudentService = new StudentService();

        // Tarih formatını ISO 8601 formatına dönüştür
        const isoBirthDate = birthDate
            ? new Date(birthDate.getTime() - (birthDate.getTimezoneOffset() * 60000)).toISOString().split('T')[0]
            : null;

        const updatedStudentData: StudentUpdateRequest | any = {
            updateStudentDto: {
                id: studentProfile?.id || 0,
                firstName,
                lastName,
                email,
                birthDate: isoBirthDate,
                phoneNumber,
                biography,
                linkedinUrl,
                githubUrl,
                imageUrl: studentProfile?.imageUrl,
                provinceId: selectedProvince,
                districtId: selectedDistrict,

            }

        };  

        try {
            const response = await service.studentUpdate(updatedStudentData);
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

    useEffect(() => {
        const provinceService = new ProvinceService();

        const fetchProvinces = async () => {
            try {
                const response = await provinceService.getAllProvince();
                setProvinces(response.data.items);
            } catch (error) {
                console.error("Provinces fetching error:", error);
            }
        };

        fetchProvinces();
    }, []);

    useEffect(() => {
        const districtService = new DistrictService();

        const fetchDistrictsByProvince = async (provinceId: number) => {
            if (!provinceId) {

                setDistricts([]);
                return;
            }
            try {
                const response = await districtService.getDistrictsByProvince(provinceId);
                setDistricts(response.data.items);

            } catch (error) {
                console.error("Districts fetching error:", error);
            }
        };

        if (selectedProvince) {
            fetchDistrictsByProvince(selectedProvince);
        }
    }, [selectedProvince]);


    const handleProvinceChange = (selectedOption: SingleValue<ProvinceModel>) => {
        const provinceId = selectedOption ? selectedOption.value : undefined;
        setSelectedProvince(provinceId);
        setDistricts([]);
    };

    const handleDistrictChange = (selectedOption: SingleValue<DistrictModel>) => {
        const districtId = selectedOption ? selectedOption.value : undefined;
        setSelectedDistrict(districtId);
    };




    return (
        <>
            <Formik
                initialValues={{ phoneNumber: '', linkedinUrl: '', githubUrl: '' }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}>
                {({ isValid, errors, touched, handleChange, values }) => (
                    <Form>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="contact-from-input mb-20">
                                    <label htmlFor="FirstName">Adınız</label>
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
                                    <label htmlFor="BirthDate">Doğum Tarihi</label>
                                    <DatePicker
                                        locale="tr"
                                        selected={birthDate}
                                        onChange={(date) => setBirthDate(date || null)}
                                        dateFormat="dd.MM.yyyy"
                                        isClearable={true}
                                        showYearDropdown
                                        scrollableMonthYearDropdown
                                        placeholderText="Doğum Tarihi Seç"
                                    />
                                </div>
                            </div>
                            <b />
                            <div className="col-md-6">
                                <div className="contact-form-input mb-20">
                                    <label htmlFor="province-select">İl</label>
                                    <Select
                                        id="province-select"
                                        className="custom-select"
                                        value={provinces.find(p => p.id === selectedProvince) ? { value: selectedProvince, label: provinces.find(p => p.id === selectedProvince)?.name } : null}
                                        onChange={handleProvinceChange}
                                        options={provinces.map(province => ({ value: province.id, label: province.name }))}
                                        isDisabled={provinces.length === 0}
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="contact-form-input mb-20">
                                    <label htmlFor="district-select">İlçe</label>
                                    <Select
                                        id="district-select"
                                        className="custom-select"
                                        value={districts.find(d => d.id === selectedDistrict) ? { value: selectedDistrict, label: districts.find(d => d.id === selectedDistrict)?.name } : null}
                                        onChange={handleDistrictChange}
                                        options={districts.map(district => ({ value: district.id, label: district.name }))}
                                        isDisabled={!selectedProvince || districts.length === 0}
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
                        </div>
                        <div className="col-sm-12">
                            <div className="contact-from-input mb-20">
                                <button type="submit" onClick={handleSubmit} className="cont-btn">
                                    Güncelle
                                </button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik >
        </>
    );
};

export default StudentContactForm;