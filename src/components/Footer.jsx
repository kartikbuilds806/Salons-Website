import React from 'react';
import { Instagram, Facebook, Youtube, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <h3>Premium Salon</h3>
                        <span>Unisex Salon</span>
                        <p>Your premium destination for luxury styling, professional makeup, and rejuvenating spa treatments. Elevating beauty standards.</p>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#services">Our Services</a></li>
                            <li><a href="#gallery">Studio Gallery</a></li>
                            <li><a href="#reviews">Client Reviews</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#services">Bridal Makeup</a></li>
                            <li><a href="#services">Hair Styling</a></li>
                            <li><a href="#services">Skin Treatments</a></li>
                            <li><a href="#services">Nail Extensions</a></li>
                        </ul>
                    </div>

                    <div className="footer-social">
                        <h4>Connect With Us</h4>
                        <div className="social-icons">

                            <a href="https://wa.me/9106398412288" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="WhatsApp">
                                <svg viewBox="0 0 32 32" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 2.5A13.5 13.5 0 002.5 16a13.4 13.4 0 002.15 7.28L2.5 29.5l6.38-2.06A13.4 13.4 0 0016 29.5 13.5 13.5 0 0029.5 16 13.5 13.5 0 0016 2.5zM16 27.28a11.23 11.23 0 01-5.74-1.57l-.41-.24-4.26 1.37 1.14-4.14-.27-.43A11.24 11.24 0 014.72 16 11.28 11.28 0 1116 27.28zm6.2-8.48c-.34-.17-2-.99-2.31-1.1s-.54-.17-.77.17-.87 1.1-.11 1.33c-.02.04-.04.08-.07.12-.22.37-.58.17-1.42-.25-1.02-.5-1.74-1.28-2.22-1.93-.05-.07-.1-.15-.14-.23-.22-.38-.03-.58.14-.75.16-.15.34-.39.51-.59.08-.09.15-.19.2-.28.17-.34.08-.63-.01-.8-.08-.17-.77-1.85-1.05-2.53-.27-.67-.55-.58-.77-.59h-.66c-.23 0-.6.09-.91.43-.31.34-1.2 1.17-1.2 2.85s1.23 3.3 1.4 3.53c.17.23 2.41 3.68 5.84 5.16.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2-.82 2.28-1.6.28-.78.28-1.45.2-1.6-.08-.13-.31-.21-.65-.38z" fill="currentColor" />
                                </svg>
                            </a>
                            <a href="tel:06398412288" className="social-icon" aria-label="Phone">
                                <Phone size={20} />
                            </a>
                        </div>
                        <p className="mt-sm text-light">Follow us for daily transformations and beauty tips.</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Premium Unisex Salon. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
