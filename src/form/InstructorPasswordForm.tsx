"use client"
import { useTokenUser } from '@/hooks/userHook/tokenUser';
import InstructorService from '@/services/instructorService';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { object, ref, string } from 'yup';

const InstructorPasswordForm = () => {
  const { userId } = useTokenUser();
  const instructorService = new InstructorService();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  const notify = (errorMessage: string) => {
    toast.error(errorMessage, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const success = () => {
    toast.success('• Güncelleme başarılı.', {
      position: "top-right",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      autoClose: 1200,
      onClose: () => window.location.reload()
    });
  };

  const handleSubmit = async (values: { password: string; newPassword: string; confirmNewPassword: string; }) => {
    try {
      await instructorService.getInstrcutorUpdatePasswordByUserId({
        userId: userId,
        currentPassword: values.password,
        newPassword: values.newPassword,
        confirmNewPassword: values.confirmNewPassword
      });
      success();
    } catch (error: any) {
      notify(error.message);
    }
  };


  const validationSchema = object({
    password: string()
      .required("Mevcut şifre alanı zorunludur")
      .matches(passwordRegex, "Şifre en az bir büyük harf, bir küçük harf içermeli ve en az 6 karakter uzunluğunda olmalıdır."),
    newPassword: string()
      .required("Yeni şifre alanı zorunludur")
      .matches(passwordRegex, "Şifre en az bir büyük harf, bir küçük harf içermeli ve en az 6 karakter uzunluğunda olmalıdır.")
      .notOneOf([ref('password'), null], 'Yeni şifre mevcut şifre ile aynı olmamalıdır.'),
    confirmNewPassword: string()
      .required("Yeni şifre tekrar alanı zorunludur")
      .matches(passwordRegex, "Şifre en az bir büyük harf, bir küçük harf içermeli ve en az 6 karakter uzunluğunda olmalıdır.")
      .oneOf([ref('newPassword')], 'Şifreler eşleşmiyor')
  });


  return (
    <>
      <Formik
        initialValues={{ password: '', newPassword: '', confirmNewPassword: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
        {({ errors, touched, handleChange, values }) => (
          <Form>
            <div className="row">
              <div className="col-md-6">
                <div className="contact-from-input mb-20">
                  <label htmlFor="Current">Mevcut Şifre</label>
                  <Field
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Mevcut Şifre"
                    className="password-field"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="toggle-password-button"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                  <ErrorMessage name="password" component="div" className="error-message" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="contact-from-input mb-20">
                  <label htmlFor="New">Yeni Şifre</label>
                  <div className="password-input-container">
                    <Field
                      name="newPassword"
                      type={showNewPassword ? "text" : "password"}
                      placeholder="Yeni Şifre"
                      className="password-field"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="toggle-password-button"
                    >
                      {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  <ErrorMessage name="newPassword" component="div" className="error-message" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="contact-from-input mb-20">
                  <label htmlFor="Retype">Yeni Şifre Tekrar</label>
                  <div className="password-input-container">
                    <Field
                      name="confirmNewPassword"
                      type={showConfirmNewPassword ? "text" : "password"}
                      placeholder="Yeni Şifreyi Tekrar Girin"
                      className="password-field"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmNewPassword(!showConfirmNewPassword)}
                      className="toggle-password-button"
                    >
                      {showConfirmNewPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  <ErrorMessage name="confirmNewPassword" component="div" className="error-message" />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="cont-btn mb-20 mt-10">
                <button type="submit" className="cont-btn">
                  Şifre Güncelle
                </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default InstructorPasswordForm;