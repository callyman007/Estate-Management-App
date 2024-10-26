// frontend/src/Components/Welcome/Welcome.jsx


import React, { useState, useEffect } from 'react';
import './Welcome.css';
import chevron_left from '../Assets/chevron-left.svg';
import chevron_right from '../Assets/chevron-right.svg';
import welcome_1 from '../Assets/welcome/welcome_1.jpg';
import welcome_2 from '../Assets/welcome/welcome_2.jpg';
import welcome_3 from '../Assets/welcome/welcome_3.jpg';

const images = [welcome_1, welcome_2, welcome_3];

const Welcome = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 13000);

        return () => clearInterval(interval);
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="welcome-page">
            <h1>Welcome to Navy Estate Karshi</h1>
            <div className="welcome-slider">
                <button className="prev" onClick={handlePrev} aria-label="Previous">
                    <img src={chevron_left} alt="Previous" className='icon' />
                </button>
                <div className="slider">
                    <img src={images[currentIndex]} alt="Property" className="slide-image" />
                </div>
                <button className="next" onClick={handleNext} aria-label="Next">
                    <img src={chevron_right} alt="Next" className='icon'/>
                </button>
            </div>
            <div className="indicators">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Slide ${index + 1}`}
                        role="button"
                        tabIndex={0}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Welcome;
