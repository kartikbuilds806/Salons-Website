import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import './Testimonials.css';

const reviews = [
    {
        name: "Kshitij Kukreti",
        text: "Quiet comfortable and well skilled staff. The owner was very nice.",
        rating: 5
    },
    {
        name: "Preeti Virmani",
        text: "Best service for hair colour, kerasmooth treatment and facial.",
        rating: 5
    },
    {
        name: "Sakshi Rawat",
        text: "Had my layered haircut done beautifully. Great experience.",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section className="section testimonials bg-light" id="reviews">
            <div className="container">
                <div className="section-title">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        What Our Clients Say
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Real feedback from our beautiful clients who trust us with their look.
                    </motion.p>
                </div>

                <div className="reviews-grid">
                    {reviews.map((review, idx) => (
                        <motion.div
                            className="review-card"
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                        >
                            <div className="stars">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={18} fill="currentColor" />
                                ))}
                            </div>
                            <p className="review-text">"{review.text}"</p>
                            <h4 className="review-name">- {review.name}</h4>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
