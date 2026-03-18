import React from 'react';
import { PhoneCall } from 'lucide-react';
import './FloatingCall.css';

const FloatingCall = () => {
    return (
        <a
            href="tel:+9106398412288"
            className="floating-call"
            aria-label="Call us now"
        >
            <PhoneCall size={30} className="call-icon" />
        </a>
    );
};

export default FloatingCall;
