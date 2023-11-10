// Header.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import headerStyles from '../styles/HeaderStyles'; // Adjust the import path as needed

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <AppBar position="static" elevation={1} sx={headerStyles.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={headerStyles.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={headerStyles.title}>
          {title}
        </Typography>
        <Box sx={headerStyles.buttonContainer}>
          <Button color="inherit">About</Button>
          <Button color="inherit">Work</Button>
          <Button color="inherit">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
