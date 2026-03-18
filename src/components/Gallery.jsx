import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

const galleryImages = [
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a3fa?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1600948836101-f9ff09d1e396?auto=format&fit=crop&q=80&w=800'
];

const Gallery = () => {
    return (
        <section className="section gallery" id="gallery">
            <div className="container">
                <div className="section-title">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Our Luxurious Studio
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        A sneak peek into the elegant ambiance of Stylish Mahi Makeover, designed for your comfort and relaxation.
                    </motion.p>
                </div>

                <div className="gallery-grid">
                    {galleryImages.map((src, index) => (
                        <motion.div
                            className="gallery-item"
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <img src={src} alt={`Studio ambiance ${index + 1}`} loading="lazy" />
                            <div className="gallery-overlay">
                                <div className="gallery-icon">+</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
