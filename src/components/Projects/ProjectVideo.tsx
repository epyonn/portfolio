import React from 'react';
import '../../styles/Projects.css';

type VideoPlayerProps = {
    videoPath: string;
    width: string;
    height: string;
};

const ProjectVideo: React.FC<VideoPlayerProps> = ({ videoPath, width, height }) => {
    return (
        <img src={videoPath} alt="Animated content" width={width} height={height} className="project-gif"/>
    );
};


export default ProjectVideo;