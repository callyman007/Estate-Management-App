// frontend/src/Components/ResetPassword/ResetPassword.jsx


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './ResetPassword.css'; // Create a CSS file for styling if needed

const ResetPassword = () => {
    const { token } = useParams(); // Get the token from the URL
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const response = await axios.post('http://localhost:4000/reset-password', { ...values, token });
            if (response.data.success) {
                setMessage('Password has been reset successfully. Redirecting to login...');
                setTimeout(() => {
                    navigate('/');
                }, 2000); // Redirect to login page after 2 seconds
            }
        } catch (error) {
            if (error.response) {
                setError(error.response.data.error);
            } else {
                setError('An error occurred. Please try again.');
            }
        }
        setSubmitting(false);
    };

    return (
        <div className="reset-password-container">
            <h1>Reset Password</h1>
            <Formik
                initialValues={{ password: '', confirmPassword: '' }}
                validationSchema={Yup.object({
                    password: Yup.string().required('Required').min(6, 'Password must be at least 6 characters'),
                    confirmPassword: Yup.string()
                        .oneOf([Yup.ref('password'), null], 'Passwords must match')
                        .required('Required')
                })}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="reset-password-fields">
                            <label>New Password:</label>
                            <Field type="password" name="password" placeholder='New Password' />
                            <ErrorMessage name="password" component="div" className="error" />
                        </div>
                        <div className="reset-password-fields">
                            <label>Confirm Password:</label>
                            <Field type="password" name="confirmPassword" placeholder='Confirm Password' />
                            <ErrorMessage name="confirmPassword" component="div" className="error" />
                        </div>
                        {message && <div className="message">{message}</div>}
                        {error && <div className="error">{error}</div>}
                        <button type="submit" disabled={isSubmitting}>
                            Reset Password
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ResetPassword;
