import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import './InstagramProof.css';

const instaPosts = [
    'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1516975080661-46bcaeb811b0?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a3fa?w=600&h=600&fit=crop'
];

const InstagramProof = () => {
    return (
        <section className="section insta-proof">
            <div className="container">
                <div className="section-title">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        See Our Real Work on Instagram 📸
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Join our community of happy clients. Follow us for daily transformations and beauty tips.
                    </motion.p>
                </div>

                <div className="insta-grid">
                    {instaPosts.map((post, index) => (
                        <motion.a
                            href="https://www.instagram.com/mahimakeover_and_academy_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="insta-post"
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <img src={post} alt={`Instagram work ${index + 1}`} loading="lazy" />
                            <div className="insta-overlay">
                                <Instagram size={36} className="insta-icon" />
                            </div>
                        </motion.a>
                    ))}
                </div>

                <motion.div
                    className="insta-action"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <a 
                        href="https://www.instagram.com/mahimakeover_and_academy_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-outline btn-lg"
                    >
                        <Instagram size={20} style={{ marginRight: '8px' }} />
                        Follow us / View More
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default InstagramProof;
