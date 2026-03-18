import React from 'react';
import { motion } from 'framer-motion';
import { Tag } from 'lucide-react';
import './Offers.css';

const Offers = () => {
    return (
        <section className="section offers bg-light">
            <div className="container">
                <motion.div
                    className="offers-banner"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="offers-content">
                        <Tag className="offer-icon" size={40} />
                        <h2>Get Special Discount on Your First Visit ✨</h2>
                        <p>Limited slots available today. Book now and pamper yourself!</p>
                        <a href="#booking" className="btn btn-primary btn-lg offers-btn">Claim Offer Now</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Offers;
