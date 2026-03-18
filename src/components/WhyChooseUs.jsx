import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, HeartHandshake, ShieldCheck } from 'lucide-react';
import teamImg from '../assets/Why Choose Us/Team.webp';
import './WhyChooseUs.css';

const features = [
    { icon: <Award size={40} />, title: "Expert Stylists", text: "Years of experience and professional training." },
    { icon: <ShieldCheck size={40} />, title: "Premium Products", text: "We use only top-tier, skin-safe brands." },
    { icon: <HeartHandshake size={40} />, title: "Personalized Care", text: "Every treatment tailored to your unique needs." },
    { icon: <Clock size={40} />, title: "Timely Service", text: "Your time is precious; we respect your schedule." }
];

const WhyChooseUs = () => {
    return (
        <section className="section why-choose">
            <div className="container">
                <div className="why-grid">
                    <motion.div
                        className="why-content"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Why Choose Stylish Mahi Makeover?</h2>
                        <p>
                            We believe in more than just beauty treatments; we believe in transformations that boost your confidence. Our dedicated team of experts ensures you leave feeling radiant and revitalized.
                        </p>
                        <div className="features-grid">
                            {features.map((item, idx) => (
                                <div className="feature-item" key={idx}>
                                    <div className="feature-icon">{item.icon}</div>
                                    <div>
                                        <h4>{item.title}</h4>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="why-image"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <img
                            src={teamImg}
                            alt="Salon environment"
                            loading="lazy"
                        />
                        <div className="experience-badge">
                            <span className="number">15+</span>
                            <span className="text">Years of<br />Experience</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
