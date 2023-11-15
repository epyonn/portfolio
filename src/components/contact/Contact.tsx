// Contact.tsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import Globe from '../geometry/Globe'; // Import the Globe component
import '../../styles/Contact.css';
import {Typography} from '@mui/material';

const Contact: React.FC = () => {
    return (
        <div className="contact-canvas">
            <Typography variant ="h3"> Contact. </Typography>
            <Canvas>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Globe />  {/* Use the Globe component */}
            </Canvas>
            {/* Include your contact form here */}
        </div>
    );
};

export default Contact;
