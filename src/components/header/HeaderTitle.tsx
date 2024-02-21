import React from 'react';
import { Typography } from '@mui/material';


interface HeaderTitleProps {
    title: string;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({ title }) => (
            <Typography variant="h6" component="div" className="title">
                {title}
            </Typography>

);

export default HeaderTitle;