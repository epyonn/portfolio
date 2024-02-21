"use client";
import React, {useEffect, useState} from 'react';
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

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

    })

    return(
        <div className='introduction-text'>
            <TypewriterEffectSmooth words={words} />
            {!isSmallScreen && (
                <Typography variant='h4'> Software Engineer </Typography>
            )}
            {isSmallScreen && (
                <Typography variant='body2'> Software Engineer </Typography>
            )}

        </div>
    )
}

export default Intro;