import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Phone, ChevronDown, CalendarDays, Clock, Sparkles } from 'lucide-react';
import './Booking.css';

const servicesList = [
    "Bridal Makeup",
    "Party & Engagement Makeup",
    "Hair Styling & Cutting",
    "Hair Treatments",
    "Skin Care",
    "Nail Art & Extensions",
    "Other Query"
];

const Booking = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: 'Bridal Makeup',
        date: '',
        time: ''
    });

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleServiceSelect = (val) => {
        setFormData({ ...formData, service: val });
        setIsDropdownOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, phone, service, date, time } = formData;
        const message = `Hello Stylish Mahi Unisex Salon! I would like to book an appointment.\n\nName: ${name}\nPhone: ${phone}\nService: ${service}\nDate: ${date}\nTime: ${time}`;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/917500887353?text=${encodedMessage}`, '_blank');
    };

    return (
        <section className="section booking" id="booking">
            <div className="container">
                <div className="booking-wrapper">
                    <motion.div
                        className="booking-content premium-booking"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="booking-header">
                            <h2>Book your appointment today</h2>
                            <p>Get special offers on bridal and hair treatments. Book your personalized makeover session in our luxury studio.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="premium-form">
                            <div className="form-row">
                                <div className="input-box">
                                    <User className="input-icon" size={20} />
                                    <input
                                        type="text"
                                        name="name"
                                        className="premium-input"
                                        placeholder="Full Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="input-box">
                                    <Phone className="input-icon" size={20} />
                                    <input
                                        type="tel"
                                        name="phone"
                                        className="premium-input"
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row full-width">
                                <div className="custom-dropdown" ref={dropdownRef}>
                                    <div
                                        className={`dropdown-header ${isDropdownOpen ? 'open' : ''}`}
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    >
                                        <Sparkles className="input-icon" size={20} />
                                        <span>{formData.service}</span>
                                        <ChevronDown className={`chevron-icon ${isDropdownOpen ? 'rotate' : ''}`} size={20} />
                                    </div>
                                    <AnimatePresence>
                                        {isDropdownOpen && (
                                            <motion.ul
                                                className="dropdown-list"
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {servicesList.map((item, idx) => (
                                                    <li
                                                        key={idx}
                                                        className={formData.service === item ? 'selected' : ''}
                                                        onClick={() => handleServiceSelect(item)}
                                                    >
                                                        {item}
                                                    </li>
                                                ))}
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="input-box">
                                    <CalendarDays className="input-icon" size={20} />
                                    <input
                                        type="date"
                                        name="date"
                                        className="premium-input custom-date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="input-box">
                                    <Clock className="input-icon" size={20} />
                                    <input
                                        type="time"
                                        name="time"
                                        className="premium-input custom-time"
                                        value={formData.time}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <motion.button
                                type="submit"
                                className="btn premium-submit-btn"
                                whileHover={{ scale: 1.02, boxShadow: '0 12px 25px rgba(183, 110, 121, 0.4)' }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Confirm Appointment <Send size={20} />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Booking;
