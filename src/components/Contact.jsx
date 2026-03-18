import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="section contact" id="contact">
            <div className="container">
                <div className="section-title">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Visit Our Studio
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        We are conveniently located. Walk in or book ahead for an exclusive session.
                    </motion.p>
                </div>

                <div className="contact-grid">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="info-card">
                            <div className="icon-wrapper"><MapPin size={24} /></div>
                            <div>
                                <h4>Our Location</h4>
                                <p>Thapdiyal Department Store, Near Abhinandan Wedding Point,<br />Balawala Road, Ranjhawala, Raipur Of, Dehradun-248008, Uttarakhand</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="icon-wrapper"><Phone size={24} /></div>
                            <div>
                                <h4>Contact Number</h4>
                                <p><a href="tel:+9106398412288">+91 0639 841 2288</a></p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="icon-wrapper"><Mail size={24} /></div>
                            <div>
                                <h4>Email Address</h4>
                                <p><a href="mailto:hello@stylishmahi.com">hello@stylishmahi.com</a></p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="icon-wrapper"><Clock size={24} /></div>
                            <div>
                                <h4>Working Hours</h4>
                                <p>Mon - Sun: 10:00 AM - 8:00 PM<br />(Open All Days)</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="contact-map"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <iframe
                            src="https://maps.google.com/maps?q=Thapdiyal+Department+Store,+Balawala+Road,+Dehradun,+Uttarakhand+248008&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Stylish Mahi Location"
                        ></iframe>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
