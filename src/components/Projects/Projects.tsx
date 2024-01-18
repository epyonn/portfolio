import React, { Suspense } from 'react';
import {Typography} from '@mui/material';

import '../../styles/Projects.css';

const CrimeCompass = React.lazy(() => import('./CrimeCompass'));
const Eggtopia = React.lazy(() => import('./Eggtopia'));

const Projects: React.FC = () => {
    return (
        <div className="projects-container" id="projects-section">
            <Typography className="projects-text"> Projects.</Typography>
            <Suspense fallback={<div>Loading...</div>}>
                <CrimeCompass />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <Eggtopia />
            </Suspense>
        </div>
    )
}

export default Projects;