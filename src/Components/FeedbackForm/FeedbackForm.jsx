// frontend/src/Components/FeedbackForm/FeedbackForm.jsx


import React, { useState } from 'react';
import './FeedbackForm.css';

const FeedbackForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Reset error and success messages
        setError(null);
        setSuccess(null);

        // Simple client-side validation
        if (!email || !message || message.length < 10) {
            setError('Email and message are required. Message must be at least 10 characters long.');
            return;
        }

        try {
            const response = await fetch('/submit-feedback', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, message, rating: rating || undefined })
            });
            const result = await response.json();

            if (response.ok) {
                setSuccess('Feedback submitted successfully.');
                // Clear form fields
                setEmail('');
                setMessage('');
                setRating('');
            } else {
                setError(result.error || 'An error occurred while submitting feedback.');
            }
        } catch (error) {
            setError('An error occurred while submitting feedback.');
        }
    };

    return (
        <div className="feedback-container">
            <h1>Submit Feedback</h1>
            {success && <p className="success">{success}</p>}
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="rating">Rating (1-5):</label>
                    <input
                        type="number"
                        id="rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        min="1"
                        max="5"
                    />
                </div>
                <button className='submit-feedback-button' type="submit">Submit Feedback</button>
            </form>
        </div>
    );
};

export default FeedbackForm;
