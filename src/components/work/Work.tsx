import React from 'react';
import { motion } from 'framer-motion';
import { Typography } from '@mui/material';
import ProjectVideo from '../projects/ProjectVideo';
import brixely from '../../assets/projects/brixely.mp4';
import '../../styles/Work.css';

const fadeInVariants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: { duration: 3 }
    }
}

const Work: React.FC = () => {
    return (
        <div className="work-container">
            <motion.div
                initial='initial'
                animate='animate'
                variants={fadeInVariants}
            >
                <Typography className="work-text"> Work Experience </Typography>
            </motion.div>
            <video src={brixely} autoPlay loop muted width={"850"} height={"600"} className="project-gif"/>
        </div>
    )
}

export default Work;