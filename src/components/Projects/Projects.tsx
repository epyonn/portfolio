import React from 'react';
import {Typography} from '@mui/material';
import CrimeCompass from './CrimeCompass';
import '../../styles/Projects.css';


const Projects: React.FC = () => {
    return (
        <div className="projects-container">
            <Typography className="projects-text"> Projects.</Typography>
            <CrimeCompass />
        </div>
    )
}

export default Projects;