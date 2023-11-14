import React from 'react';
import { Typography } from '@mui/material';
import ProjectVideo from './ProjectVideo';
import crimePath from '../../assets/projects/crime-compass.mov';
import crimeGif from '../../assets/projects/crime-compass2.gif';
import '../../styles/Projects.css';

const CrimeCompass: React.FC = () => {
    return (
        <div className="cc-container">
        <Typography className="title-text"> Crime Compass </Typography>
        <ProjectVideo videoPath={ crimeGif } />
        <div className="app-description">
            <Typography>
                    Crime Compass is my attempt at fighting the increasing trend of car burglaries in Oakland. I’ve had my car broken into over five times and I’ve noticed the car break-ins would occur on specific streets/locations. I wanted an app where I can collect data on where break-ins occur and plot it on a map. Using this data can guide me to  “safer” locations to park. Crime Compass is a full-stack CRUD application that utilizes javascript, html, css for the frontend and node, express, and mongodb for the backend. Crime Compass is available online and anyone can make a report.
            </Typography>
        </div>
        </div>
    )
}

export default CrimeCompass