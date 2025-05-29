import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CreateNote from './Components/CreateNote';
import Note from './Components/Note'
import { Box } from '@mui/material';

const App = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />
      <Box sx={{ flex: 1, p: 2 }}>
        <CreateNote />
        <Note/>
      </Box>
      <Footer />
      
    </Box>
  );
};

export default App;
