// frontend/src/Pages/Home.jsx


import React from 'react'
import Welcome from '../Components/Welcome/Welcome'
import EstateDescription from '../Components/EstateDescription/EstateDescription'
import PopularProperties from '../Components/PopularProperties/PopularProperties'
import FeedbackForm from '../Components/FeedbackForm/FeedbackForm'
import Testimonials from '../Components/Testimonials/Testimonials'
import TestimonialForm from '../Components/TestimonialForm/TestimonialForm'


const Home = () => {
    return (
        <div>
        <Welcome/>
        <EstateDescription/>
        <PopularProperties/>
        <Testimonials/>
        <FeedbackForm/>
        <TestimonialForm/>
        </div>
    )
}

export default Home
