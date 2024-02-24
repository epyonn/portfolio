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

const Work: React.FC = () => {
    return (
        <div>
        <motion.div 
            initial='initial'
            animate='animate'
            variants={fadeInVariants}
        >
            <Typography className="intro-text"> Work Experience </Typography>

        </motion.div>
        </div>
    )
}

export default Work;