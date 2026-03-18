import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, HeartHandshake, ShieldCheck, Sparkles, UserCheck } from 'lucide-react';
import teamImg from '../assets/why-choose-us/Team.webp';
import './WhyChooseUs.css';

const features = [
    { icon: <Award size={40} />, title: "Experienced and skilled staff", text: "" },
    { icon: <ShieldCheck size={40} />, title: "Hygienic and clean environment", text: "" },
    { icon: <HeartHandshake size={40} />, title: "Friendly customer service", text: "" },
    { icon: <Clock size={40} />, title: "Affordable pricing", text: "" },
    { icon: <Sparkles size={40} />, title: "Latest beauty treatments", text: "" },
    { icon: <UserCheck size={40} />, title: "Personalized care", text: "" }
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
                        <h2>Why Choose Riddhi Makeover Unisex Salon?</h2>
                        <p>
                            We focus on giving every client a comfortable experience with professional results.
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
                            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
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
