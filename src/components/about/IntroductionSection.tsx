import React from 'react';
import { motion } from 'framer-motion';
import { Typography } from '@mui/material';

const fadeInVariants = {
    initial: {opacity: 0},
    animate: {
        opacity: 1,
        transition: { duration: 3 }
    }
}

interface IntroductionSectionProps {
    introductionText: string;
    overviewText: string;
}

const IntroductionSection: React.FC<IntroductionSectionProps> = ({ introductionText, overviewText }) => {
    return (
        <motion.div 
            initial='initial'
            animate='animate'
            variants={fadeInVariants}
        >
            <Typography className="intro-text">{introductionText}</Typography>
            <Typography className="overview-text">{overviewText}</Typography>
        </motion.div>
    );
};

export default IntroductionSection;