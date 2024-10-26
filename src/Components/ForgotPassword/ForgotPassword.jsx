// frontend/src/Components/ForgotPassword/ForgotPassword.jsx


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './ForgotPassword.css'; // Create a CSS file for styling if needed

const ForgotPassword = () => {
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Initialize navigate

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const response = await axios.post('http://localhost:4000/forgot-password', values);
            if (response.data.success) {
                setMessage('Please check your email for the password reset link.');
                setSubmitting(false);
                // Optionally redirect the user after successful request
                navigate('/'); // Uncomment if you want to redirect the user after successful request
            }
        } catch (error) {
            if (error.response) {
                setError(error.response.data.error);
            } else {
                setError('An error occurred. Please try again.');
            }
        }
    };

    return (
        <div className="forgot-password-container">
            <h1>Forgot Password</h1>
            <Formik
                initialValues={{ email: '' }}
                validationSchema={Yup.object({
                    email: Yup.string().email('Invalid email address').required('Required')
                })}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="forgot-password-fields">
                            <label>Email:</label>
                            <Field type="email" name="email" placeholder='Email Address' />
                            <ErrorMessage name="email" component="div" className="error" />
                        </div>
                        {message && <div className="message">{message}</div>}
                        {error && <div className="error">{error}</div>}
                        <button type="submit" disabled={isSubmitting}>
                            Send Reset Link
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ForgotPassword;
