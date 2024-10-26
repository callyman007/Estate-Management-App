// frontend/src/Components/Footer/Footer.jsx


import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo.PNG';
import idbadge from '../Assets/id-badge.svg';
import building from '../Assets/building.svg';
import facebook from '../Assets/facebook.svg';
import twitter from '../Assets/twitter-square.svg';
import telegram from '../Assets/telegram.svg';
import whatsapp from '../Assets/whatsapp-square.svg';
import home from '../Assets/home-modern.svg';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-top">
                <div className="footer-logo">
                    <img className="footer-logo-icon" src={footer_logo} alt="Navy Estate Karshi Logo" />
                    <p>NAVY ESTATE KARSHI</p>
                </div>
                <div className="footer-links-container">
                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li>
                                <img className='icons' src={home} alt="Home" />
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <img className='icons' src={idbadge} alt="Digital ID" />
                                <a href="/ViewDigitalID">View Digital ID</a>
                            </li>
                            <li>
                                <img className='icons' src={building} alt="Property" />
                                <a href="/PropertyList">Property</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-social-icons">
                        <h3>Follow Us</h3>
                        <div className="social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <img className='icons' src={facebook} alt="Facebook" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <img className='icons' src={twitter} alt="Twitter" />
                            </a>
                            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                                <img className='icons' src={telegram} alt="Telegram" />
                            </a>
                            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                                <img className='icons' src={whatsapp} alt="WhatsApp" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <hr />
                <p>© 2024 Navy Estate Karshi. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
