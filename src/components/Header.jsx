import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobMenuOpen, setMobMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setMobMenuOpen(!mobMenuOpen);
    const closeMenu = () => setMobMenuOpen(false);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <div className="logo">
                    <a href="#">
                        <h2>Riddhi Makeover</h2>
                        <span>Unisex Salon</span>
                    </a>
                </div>

                <nav className={`nav-links ${mobMenuOpen ? 'open' : ''}`}>
                    <a href="#services" onClick={closeMenu}>Services</a>
                    <a href="#gallery" onClick={closeMenu}>Studio</a>
                    <a href="#reviews" onClick={closeMenu}>Reviews</a>
                    <a href="#contact" onClick={closeMenu}>Contact</a>
                    <a href="#booking" className="btn btn-primary" onClick={closeMenu}>Book Now</a>
                </nav>

                <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
                    {mobMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
        </header>
    );
};

export default Header;
