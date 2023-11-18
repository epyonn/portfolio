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
            <ProjectVideo videoPath={ crimeGif } width={"850"} height={"500"}  />
            <div className="app-description">
                <Typography>
                Crime Compass is my proactive response to the rising trend of car burglaries in Oakland, a challenge I've personally faced with over five break-ins to my own vehicle. I observed that these incidents often occurred in specific streets or locations. This realization sparked the idea for an app where users can collate data on break-in hotspots and visualize them on a map. This feature aims to assist users in identifying and opting for safer parking spots based on the compiled data. As a full-stack CRUD application, Crime Compass leverages JavaScript, HTML, and CSS for the front end, while employing Node.js, Express, and MongoDB for the backend. It's a community-driven platform, accessible online, where anyone can contribute by reporting incidents, thereby helping others make informed decisions about where to park safely.            </Typography>
            </div>
        </div>
    )
}

export default CrimeCompass