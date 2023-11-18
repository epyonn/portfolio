import React from 'react';
import {Typography} from '@mui/material'

interface AboutContentProps {
    aboutText : string;
    solarImgPath: string;
}

const AboutContent: React.FC<AboutContentProps> = ({aboutText, solarImgPath}) => {
    return (
        <div className="overview-container">
            <div className="overview-text">
                <Typography className="overview-typography">
                    {aboutText}
                </Typography>
            </div>
            <div>
                <img src={solarImgPath} className="module-img"/>
            </div>
        </div>
    )
}

export default AboutContent;