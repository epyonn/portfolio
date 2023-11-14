import React from 'react';
import '../../styles/Projects.css';

type VideoPlayerProps = {
    videoPath: string;
};

const ProjectVideo: React.FC<VideoPlayerProps> = ({ videoPath }) => {
    return (
        <img src={videoPath} alt="Animated content" width="850" height="500" className="project-gif"/>
    );
};

export default ProjectVideo;