import React from 'react';
import { motion } from "framer-motion";
import {Typography} from '@mui/material'
import solarPanel from '../assets/solarpanel.png';
import '../styles/About.css';
import { Image } from '@react-three/drei';


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
            <div className="overView-container">
                <Typography>
                    As a seasoned Process Engineer with 9 years in the solar industry, I've specialized in photovoltaic cell laser cutting and stringing processes, significantly contributing to the development of solar module products for both commercial and residential markets. My expertise in Python and data analytics led to the development of innovative dashboards tracking solar module IV performance, fueling my passion for coding. Now transitioning into web development, I bring a unique blend of engineering precision and creative coding, with a focus on JavaScript, TypeScript, React, HTML, and CSS, ready to deliver cutting-edge web solutions.                
                </Typography>
                <div>
                    <img src={solarPanel} className='module-img'/>
                </div>
            </div>
            </motion.p>
        </div>
    )
}

export default About; 
