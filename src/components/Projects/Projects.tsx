import React from 'react';
import {Typography} from '@mui/material';
import CrimeCompass from './CrimeCompass';
import Eggtopia from './Eggtopia';
import '../../styles/Projects.css';


const Projects: React.FC = () => {
    return (
        <div className="projects-container" id="projects-section">
            <Typography className="projects-text"> Projects.</Typography>
            <CrimeCompass />
            <Eggtopia />
        </div>
    )
}

export default Projects;