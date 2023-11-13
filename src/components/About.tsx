import React from 'react';
import { motion } from "framer-motion";
import {Typography} from '@mui/material'

import '../styles/About.css';


const fadeInVariants = {
    initial: {opacity: 0},
    animate: {
        opacity: 1,
        transition: {duration: 3}
    }
}


const About: React.FC = () => {
    return (
        <div className="about-container">

            <motion.div 
                initial='initial'
                animate="animate"
                variants={fadeInVariants}

            >
                <Typography className="introText">Introduction</Typography>
                <Typography className="overviewText"> Overview. </Typography>
            </motion.div>
            <motion.p
            >
      
            <Typography>
            As a seasoned Process Engineer with 9 years in the solar industry, I have specialized in PV Cell Laser Cutting and Stringing Processes, significantly contributing to solar module advancements for both commercial and residential markets. My expertise in Python and data analytics led to the development of innovative dashboards, fueling my passion for coding. Now transitioning into web development, I bring a unique blend of engineering precision and creative coding, with a focus on JavaScript, TypeScript, React, HTML, and CSS, ready to deliver cutting-edge web solutions.
            </Typography>
            
            </motion.p>
        </div>
    )
}

export default About; 
