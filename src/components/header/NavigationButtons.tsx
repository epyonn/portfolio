import React from 'react';
import {Button} from '@mui/material';

const NavigationButtons: React.FC = () => (
    <div
        className="buttonContainer"
    >
        <Button
            color="inherit"
            component="a"
            href="#about-section" 
        >
            About
        </Button>

        <Button
            color="inherit"
            component="a"
            href="#projects-section"
        >
            Projects
        </Button>

        <Button
            color="inherit"
            component="a"
            href="#contact-section"
        >
            Contact
        </Button>
        
    </div>
)

export default NavigationButtons;