import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Box sx={{ textAlign: 'center', p: 2, mt: 'auto', bgcolor: '#f0f0f0' }}>
      <Typography variant="body2" color="textSecondary">
        Made by Rabia Khan | &copy; {year}
      </Typography>
    </Box>
  );
};

export default Footer;
