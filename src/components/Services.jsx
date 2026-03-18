import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Scissors, Droplets, Star, UserPlus, Heart } from 'lucide-react';
import './Services.css';

import imgBridal from '../assets/Services/Bridal Makeup.webp';
import imgParty from '../assets/Services/party_makup.webp';
import imgHair from '../assets/Services/Hair styling.webp';
import imgColor from '../assets/Services/Hair  color.webp';
import imgSkin from '../assets/Services/skin treatment.webp';
import imgNails from '../assets/Services/nails art and extension.webp';

const servicesData = [
    {
        icon: <Star size={24} />,
        title: 'Bridal Makeup',
        description: 'Bridal and party makeup',
        image: imgBridal
    },
    {
        icon: <Sparkles size={24} />,
        title: 'Party & Engagement Makeup',
        description: 'Stunning party and engagement makeup',
        image: imgParty
    },
    {
        icon: <Scissors size={24} />,
        title: 'Hair Styling & Cutting',
        description: 'Expert hair styling and cutting',
        image: imgHair
    },
    {
        icon: <Droplets size={24} />,
        title: 'Hair Treatments',
        description: 'Hair spa, keratin, smoothing, botox treatment',
        image: imgColor
    },
    {
        icon: <UserPlus size={24} />,
        title: 'Skin Care',
        description: 'O+3 facial, vitamin C facial, gold facial',
        image: imgSkin
    },
    {
        icon: <Heart size={24} />,
        title: 'Nail Art & Extensions',
        description: 'Nail extensions and nail art',
        image: imgNails
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    },
};

const Services = () => {
    return (
        <section className="section services" id="services">
            <div className="container">
                <div className="section-title">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Our Signature Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Indulge in our luxurious treatments performed by seasoned professionals, designed to enhance your natural beauty.
                    </motion.p>
                </div>

                <motion.div
                    className="services-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {servicesData.map((service, index) => (
                        <motion.div className="service-card" key={index} variants={cardVariants}>
                            <div className="service-image-wrapper">
                                <img src={service.image} alt={service.title} className="service-image" loading="lazy" />
                                <div className="service-icon-floating">
                                    {service.icon}
                                </div>
                            </div>
                            <div className="service-content">
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-desc">{service.description}</p>
                                <a
                                    href={`https://wa.me/9106398412288?text=Hi,%20I%20am%20interested%20in%20the%20${service.title}%20service.`}
                                    className="btn btn-outline service-btn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Book via WhatsApp
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
