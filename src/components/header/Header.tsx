import React from 'react';
import { AppBar, Toolbar, IconButton, Button, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HeaderTitle from './HeaderTitle';
import MenuButton from './MenuButton';
import NavigationButtons from './NavigationButtons';
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
        <MenuButton />
        <HeaderTitle title={title} />
        <NavigationButtons />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
