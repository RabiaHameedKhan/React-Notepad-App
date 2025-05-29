import React from 'react';
import logo from '../images/logo.png';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: 'black' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <img src={logo} alt="Logo" style={{ height: 40 }} />
          <Typography variant="h6" component="div" sx={{ color: 'yellow' }}>
            MY NOTEPAD
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
