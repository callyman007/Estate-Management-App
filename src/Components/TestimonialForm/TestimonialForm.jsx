// frontend/src/Components/TestimonialForm/TestimonialForm.jsx


import React, { useState, useEffect } from 'react';
import './TestimonialForm.css';
import defaultImage from '../Assets/welcome/defaultImage.jpg';

const TestimonialForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [message, setMessage] = useState('');
    const [userImage, setUserImage] = useState(null); // Initial state is null
    const [imageFile, setImageFile] = useState(null);
    const [userExists, setUserExists] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await fetch(`/users?name=${name}&email=${email}&role=${role}`); // Adjust API endpoint
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                if (data.exists) {
                    setUserExists(true);
                    setUserImage(data.image || null); // Set to null if no image
                } else {
                    setUserExists(false);
                }
            } catch (error) {
                setError(error.message);
            }
        };

        if (name && email && role) {
            fetchUserDetails();
        }
    }, [name, email, role]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!userExists) {
            setError('User not found or invalid details.');
            return;
        }

        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('role', role);
            formData.append('message', message);
            if (imageFile) {
                formData.append('image', imageFile);
            }

            const response = await fetch('/testimonials', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                setSuccess('Testimonial submitted successfully.');
                setName('');
                setEmail('');
                setRole('');
                setMessage('');
                setImageFile(null);
                setUserImage(null); // Reset user image
            } else {
                setError('Failed to submit testimonial.');
            }
        } catch (error) {
            setError('An error occurred.');
        }
    };

    return (
        <div className="testimonial-form-container">
            <h2>Write Your Testimonial</h2>
            {success && <p className="success-message">{success}</p>}
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="role">Role:</label>
                    <select
                        id="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                    >
                        <option value="">Select role</option>
                        <option value="Admin">Admin</option>
                        <option value="Staff">Staff</option>
                        <option value="Landlord">Landlord</option>
                        <option value="Tenant">Tenant</option>
                        <option value="Dependent">Dependent</option>
                        <option value="Visitor">Visitor</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Upload Image (optional):</label>
                    <input
                        type="file"
                        id="image"
                        accept="image/*"
                        onChange={(e) => setImageFile(e.target.files[0])}
                    />
                </div>
                <div className={`user-image ${userImage ? 'show' : ''}`}>
                    <img src={userImage || defaultImage} alt="User" />
                </div>
                <button className="submit-testimonial-button" type="submit">Submit Testimonial</button>
            </form>
        </div>
    );
};

export default TestimonialForm;
