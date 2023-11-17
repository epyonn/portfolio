// Contact.tsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import {Typography} from '@mui/material';
import Globe from '../geometry/Globe'; // Import the Globe component
import Scene from './Scene';
import ContactForm from './ContactForm'
import '../../styles/Contact.css';

const Contact: React.FC = () => {
    return (
        <div className="contact-container" id="contact-section">
            <div className="title-text">
                <Typography variant ="h3"> Contact. </Typography>
            </div>
            <div className="form-container">
                <div className="contactform-container">
                <ContactForm />
                </div>
                <Scene />
            </div>
        </div>
    );
};

export default Contact;


