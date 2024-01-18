import React, { useState } from 'react';
import {Typography, Button} from '@mui/material';
import ProjectVideo from './ProjectVideo';
import feedGif from '../../assets/projects/feedpet.gif';
import evolveGif from '../../assets/projects/evolve.gif';
import petGif from '../../assets/projects/pets.gif';
import '../../styles/Projects.css';

const Eggtopia: React.FC = () => {
    const gifs = [feedGif, evolveGif, petGif];
    const [currentGifIndex, setCurrentGifIndex] = useState(0);

    const handleNextGif = () => {
        setCurrentGifIndex((currentGifIndex + 1) % gifs.length);
    };

    const handlePreviousGif = () => {
        setCurrentGifIndex((currentGifIndex - 1 + gifs.length) % gifs.length);
    };

    return (
        <div className="eggtopia-container">
            <Typography className="title-text"> Eggtopia </Typography>
            
            <div className="eggtopia-video-container">
                <Button onClick={handlePreviousGif}>Previous</Button>
                <div className="gif-container">
                    <ProjectVideo videoPath={gifs[(currentGifIndex - 1 + gifs.length) % gifs.length]} width={"153"} height={"332.5"} />
                    <ProjectVideo videoPath={gifs[currentGifIndex]} width={"306"} height={"665"} />
                    <ProjectVideo videoPath={gifs[(currentGifIndex + 1) % gifs.length]} width={"153"} height={"332.5"} />
                </div>
                <Button onClick={handleNextGif}>Next</Button>
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