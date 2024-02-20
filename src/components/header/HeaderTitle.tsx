import React from 'react';
import { Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/Github';

interface HeaderTitleProps {
    title: string;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({ title }) => (
            <Typography variant="h6" component="div" className="title">
                {title}
            </Typography>

);

export default HeaderTitle;