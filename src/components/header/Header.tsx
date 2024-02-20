import React from 'react';
import { AppBar, Toolbar, IconButton, Button, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HeaderTitle from './HeaderTitle';
import MenuButton from './MenuButton';
import NavigationButtons from './NavigationButtons';
import Icons from './Icons';
import '../../styles/HeaderStyles.css';

interface HeaderProps {
  title: string;
}

interface HeaderTitleProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <AppBar position="static" className="appBar" elevation={1}>
      <Toolbar>
        <div className='nav-container'>
          <div className='icons-container'>
            <HeaderTitle title={title} />
            <Icons />
          </div>
          <div>
            <NavigationButtons />
          </div>
        </div>

      </Toolbar>
    </AppBar>
  );
}

export default Header;
