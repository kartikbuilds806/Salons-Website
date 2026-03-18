import React from 'react';
import { motion } from 'framer-motion';
import './BeforeAfter.css';

const transformations = [
    {
        before: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=600',
        after: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&q=80&w=600',
        label: 'Bridal Makeup'
    },
    {
        before: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a3fa?auto=format&fit=crop&q=80&w=600',
        after: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=600',
        label: 'Hair Coloring'
    }
];

const BeforeAfter = () => {
    return (
        <section className="section before-after bg-light">
            <div className="container">
                <div className="section-title">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Real Transformations
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Witness the magic of our expert styling. Swipe or compare our actual client makeovers.
                    </motion.p>
                </div>

                <div className="transformations-grid">
                    {transformations.map((item, index) => (
                        <motion.div
                            className="transformation-card"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <h3 className="transform-title">{item.label}</h3>
                            <div className="transform-images">
                                <div className="image-wrapper before">
                                    <img src={item.before} alt={`${item.label} Before`} loading="lazy" />
                                    <span className="badge">Before</span>
                                </div>
                                <div className="image-wrapper after">
                                    <img src={item.after} alt={`${item.label} After`} loading="lazy" />
                                    <span className="badge">After</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BeforeAfter;
