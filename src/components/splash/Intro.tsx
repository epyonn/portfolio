"use client";
import React from 'react';
import { Typography, Box } from '@mui/material';
import { TypewriterEffectSmooth } from './typewriter-effect';

import '../../styles/Splash.css';

const Intro = () => {
    const words = [
        {
            text: 'Hi,'
        },
        {
            text: "I'm"
        },
        {
            text: 'Davis'
        }
    ];

    return(
        <div className='introduction-text'>
            <TypewriterEffectSmooth words={words} />
            <Typography variant="h4"> Software Engineer </Typography>
        </div>
    )
}

export default Intro;