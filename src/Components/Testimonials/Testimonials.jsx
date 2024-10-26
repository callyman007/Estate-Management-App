// frontend/src/Components/Testimonials/Testimonials.jsx


import React from 'react';
import './Testimonials.css';
import id1_img from '../Assets/welcome/id1_img.jpg';
import id2_img from '../Assets/welcome/id2_img.jpg';
import id5_img from '../Assets/welcome/id5_img.jpg';
import id8_img from '../Assets/welcome/id8_img.jpg';
import id11_img from '../Assets/welcome/id11_img.jpg';
import id14_img from '../Assets/welcome/id14_img.jpg';

// Example data with roles
const testimonials = [
    {
        name: 'Jane Doe',
        role: 'Landlord',
        message: 'The management of Navy Estate Karshi is top-notch. The staff is highly professional and responsive to any issues.',
        image: id5_img, // Update this with the actual image path
    },
    {
        name: 'John Smith',
        role: 'Tenant',
        message: 'Living here has been a great experience. The estate is well-maintained and the community is welcoming.',
        image: id2_img, // No image provided
    },
    {
        name: 'Jason Borne',
        role: 'Admin',
        message: 'Our team strives to ensure the best living conditions for everyone in the estate. Positive feedback like this motivates us to keep improving.',
        image: id1_img, // Update this with the actual image path
    },
    {
        name: 'Michael Brown',
        role: 'Staff',
        message: 'It’s rewarding to see our efforts being appreciated. We are committed to maintaining the high standards of the estate.',
        image: id11_img, // No image provided
    },
    {
        name: 'Sara Lee',
        role: 'Dependent',
        message: 'The facilities provided have made our stay very comfortable and pleasant.',
        image: id14_img, // Update this with the actual image path
    },
    {
        name: 'Anna Green',
        role: 'Visitor',
        message: 'As a visitor, I was impressed with the cleanliness and orderliness of the estate.',
        image: id8_img, // No image provided
    },
];

const roleStyles = {
    Admin: 'admin',
    Staff: 'staff',
    Landlord: 'landlord',
    Tenant: 'tenant',
    Dependent: 'dependent',
    Visitor: 'visitor',
};

const TestimonialItem = ({ name, role, message, image }) => (
    <div className={`testimonial-item ${roleStyles[role]}`}>
        {image && (
            <div className="testimonial-image">
                <img src={image} alt={name} />
            </div>
        )}
        <div className="testimonial-content">
            <p className="testimonial-message">"{message}"</p>
            <p className="testimonial-author">
                <strong>{name}</strong>, <em>{role}</em>
            </p>
        </div>
    </div>
);

const Testimonials = () => (
    <div className="testimonials-container">
        <h2>What Our Community Members Say</h2>
        <div className="testimonials-list">
            {testimonials.map((testimonial, index) => (
                <TestimonialItem
                    key={index}
                    name={testimonial.name}
                    role={testimonial.role}
                    message={testimonial.message}
                    image={testimonial.image}
                />
            ))}
        </div>
    </div>
);

export default Testimonials;
