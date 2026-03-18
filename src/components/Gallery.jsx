import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

import img1 from '../assets/New folder/Our gallery Makeover area.webp';
import img2 from '../assets/New folder/ourgallery_2nd.webp';
import img3 from '../assets/New folder/ourgallery_3rdimage.webp';
import img4 from '../assets/New folder/ourgllery_4thimage.webp';
import img5 from '../assets/New folder/ourgallery_5thimage.webp';
import img6 from '../assets/New folder/ourgallery_6thimage.webp';

const galleryImages = [
    img1, img2, img3, img4, img5, img6
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
