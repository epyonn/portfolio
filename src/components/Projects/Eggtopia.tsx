import React from 'react';
import {Typography} from '@mui/material';
import ProjectVideo from './ProjectVideo';
import feedGif from '../../assets/projects/feedpet.gif';
import evolveGif from '../../assets/projects/evolve.gif';
import petGif from '../../assets/projects/pets.gif';
import '../../styles/Projects.css';


const Eggtopia: React.FC = () => {
    return (
        <div className="eggtopia-container">
            <Typography className="title-text"> Eggtopia </Typography>
            
            <div className="eggtopia-video-container">
                <ProjectVideo videoPath={feedGif} width={"306"} height={"665"} />
                <ProjectVideo videoPath={evolveGif} width={"306"} height={"665"} />
                <ProjectVideo videoPath={petGif} width={"306"} height={"665"} />
            </div>
            
            <div className="app-description">
                <Typography>
                Eggtopia is a passion project born from my obsession with productivity tools and techniques. At the core of my daily routine is the Pomodoro Technique, which relies on setting a timer for focused work periods. Eggtopia takes this concept further by gamifying the process, incentivizing users to concentrate for longer durations.
                In Eggtopia, you can raise and evolve pets by feeding them fruits. These eggs and fruits are rewards for maintaining focus until the timer runs out. A key feature is that you cannot use other apps while the timer is active; the timer pauses if you switch apps, ensuring uninterrupted focus. Eggtopia is built using React Native, HTML, CSS, and MaterialUI.
                </Typography>
            </div>
        </div>
    )

}

export default Eggtopia;