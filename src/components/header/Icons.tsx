import React from 'react';
import { Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/Github';

const Icons:React.FC = () => {
    return (
        <div>
            <Link href="https://www.linkedin.com/in/davis-p-nguyen/">
                <LinkedInIcon 
                    style={{ color: '#0e76a8', marginLeft: 'auto', width: '50px', height: '50px'}}
                />
            </Link>
      
        </div>
    )
}

export default Icons;