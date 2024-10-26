// frontend/src/Pages/Login.jsx

/*
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Login.css';
import logo from '../Components/Assets/logo.PNG';
import eye from '../Components/Assets/eye.svg';
import eyeSlash from '../Components/Assets/eye-slash.svg';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (values, { setSubmitting, setErrors }) => {
        try {
            const payload = {
                identifier: values.email, // Use the email as identifier
                password: values.password,
                role: values.role, // Include the selected role
            };

            const response = await axios.post('http://localhost:4000/api/auth/login', payload, {
        headers: { 'Content-Type': 'application/json' },
        });

      console.log('Login response:', response.data); // Debugging log
            if (response.data.success) {
                localStorage.setItem('token', response.data.token);
                // Redirect based on user role
            switch (values.role) {
                case 'Admin':
                    window.location.href = 'http://localhost:5173'; 
                    break;
                    case 'Staff':
                    navigate('/staff-dashboard');
                    break;
                case 'Landlord':
                    navigate('/landlord-dashboard');
                    break;
                case 'Tenant':
                    navigate('/tenant-dashboard');
                    break;
                case 'Dependent':
                    navigate('/dependent-dashboard');
                    break;
                default:
                    navigate('/'); // Default redirect if role is unknown
            }
            } else {
                setErrors({ server: 'Login failed. Please try again.' });
            }
        } catch (error) {
            const errorMessage = error.response
                ? error.response.data.error || 'An error occurred. Please try again.'
                : 'Network error. Please check your connection.';
            setErrors({ server: errorMessage });
        } finally {
            setSubmitting(false);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    };

    const toggleRememberMe = () => {
        setRememberMe(prev => !prev);
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>Login</h1>
                <img className='logo' src={logo} alt="Navy Estate Karshi" />
                <div className='navy-estate'>Navy Estate Karshi</div>
                <Formik
    initialValues={{ email: '', password: '', role: '' }} // Include role in initial values
    validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Required'),
        role: Yup.string().required('Please select a role'), // Validation for role
    })}
    onSubmit={handleSubmit}
>
    {({ isSubmitting, values, handleChange }) => (
        <Form>
            <div className="login-fields">
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder='Email Address'
                    onChange={handleChange} 
                    value={values.email} 
                />
                <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="login-fields password-field">
                <label htmlFor="password">Password:</label>
                <div className="password-input-wrapper">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        id="password"
                        placeholder='Password'
                        onChange={handleChange}
                        value={values.password}
                    />
                    <img
                        src={showPassword ? eyeSlash : eye}
                        alt={showPassword ? 'Hide password' : 'Show password'}
                        className="password-toggle-icon"
                        onClick={togglePasswordVisibility}
                    />
                </div>
                <ErrorMessage name="password" component="div" className="error" />
            </div>

            <div className="login-fields">
                <label>Role:</label>
                <select 
                    name="role"
                    value={values.role}
                    onChange={handleChange}
                    className='login-role'
                >
                    <option value="" disabled>Select Role</option>
                    <option value="Admin">Admin</option>
                    <option value="Staff">Staff</option>
                    <option value="Landlord">Landlord</option>
                    <option value="Tenant">Tenant</option>
                    <option value="Dependent">Dependent</option>
                </select>
                <ErrorMessage name="role" component="div" className="error" />
            </div>

            <div className="remember-forget">
                <div className="remember-me">
                    <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={toggleRememberMe}
                    />
                    Remember Me
                </div>
                <ErrorMessage name="server" component="div" className="error" />
                <div className="links">
                    <a href="/forgot-password">Forgot Password?</a>
                </div>
            </div>

            <button className='login-button' type="submit" disabled={isSubmitting}>
                Login
            </button>
        </Form>
    )}
</Formik>

            </div>
        </div>
    );
};

export default Login;
*/

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import VisibilityIcon from '../Components/Assets/eye.svg';
import VisibilityOffIcon from '../Components/Assets/eye-slash.svg';
import Logo from '../Components/Assets/logo.PNG';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password || !role) {
      setError('All fields are required.');
      return;
    }

    setLoading(true);
    setError('');

    const payload = {
      identifier: email,
      password,
      role,
    };

    try {
      const response = await axios.post(
        'http://localhost:4000/api/auth/login',
        payload,
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (response.data.success) {
        // Replace with cookie-setting logic
        localStorage.setItem('token', response.data.token); 

        const roleRoutes = {
          Admin: 'http://localhost:5173',
          Staff: '/staff-dashboard',
          Landlord: '/landlord-dashboard',
          Tenant: '/tenant-dashboard',
          Dependent: '/dependent-dashboard',
        };

        const redirectTo = roleRoutes[role] || '/';
        if (role === 'Admin') {
          window.location.href = redirectTo;
        } else {
          navigate(redirectTo);
        }
      } else {
        setError('Login failed. Please try again.');
      }
    } catch (err) {
      setError(err.response?.data.error || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleRememberMe = () => setRememberMe((prev) => !prev);

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={Logo} alt="Navy Estate Logo" className="login-logo" />
        <h5 className="login-title">Navy Estate Karshi</h5>
        <h4 className="login-subtitle">Login</h4>
        {error && <div className="login-error">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="login-fields">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className="login-fields">
  <label htmlFor="password">Password:</label>
  <div className="password-input-wrapper">
    <input
      type={showPassword ? 'text' : 'password'}
      name="password"
      id="password"
      placeholder="Password"
      className="password-input"
      onChange={(e) => setPassword(e.target.value)}
      value={password}
      required
    />
    <img
      src={showPassword ? VisibilityOffIcon : VisibilityIcon}
      alt={showPassword ? 'Hide password' : 'Show password'}
      className="password-toggle-icon"
      onClick={togglePasswordVisibility}
    />
  </div>
</div>

          <div className="login-fields">
            <label>Role:</label>
            <select
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="login-role"
              required
            >
              <option value="" disabled>
                Select Role
              </option>
              <option value="Admin">Admin</option>
              <option value="Staff">Staff</option>
              <option value="Landlord">Landlord</option>
              <option value="Tenant">Tenant</option>
              <option value="Dependent">Dependent</option>
            </select>
          </div>
          <div className="remember-forget">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={toggleRememberMe}
              />
              Remember Me
            </label>
            <div className="links">
              <a href="/forgot-password">Forgot Password?</a>
            </div>
          </div>
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
