"use client";
import React from 'react';
import { Typography, Box } from '@mui/material';
import 
import '../../App.css';


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
            <Typography variant="h2" sx={{fontWeight: 'bold'}} > Hi, I'm Davis </Typography>
            <Typography variant="h4" sx={{fontFamily: 'BDOGrotesk'}}>Software Engineer </Typography>
        </div>
    )
}

export default Intro;