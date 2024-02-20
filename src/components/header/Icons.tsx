import React from 'react';
import { Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Icons:React.FC = () => {
    return (
        <div>
            <Link href="https://www.linkedin.com/in/davis-p-nguyen/">
                <LinkedInIcon 
                    style={{ color: '#0e76a8', marginLeft: 'auto', width: '50px', height: '50px'}}
                />
            </Link>
            <Link href="https://github.com/epyonn">
                <GitHubIcon
                    style={{ color: 'black', marginLeft: 'auto', width: '40px', height: '40px'}}
                />
            </Link>
      
        </div>
    )
}

export default Icons;