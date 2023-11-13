// Header.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import  '../styles/HeaderStyles.css'; // Adjust the import path as needed

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <AppBar position="static" className="appBar" elevation={1} >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className="menuButton"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" className="title">
          {title}
        </Typography>
        <div className="buttonContainer">
          <Button color="inherit">About</Button>
          <Button color="inherit">Work</Button>
          <Button color="inherit">Contact</Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
