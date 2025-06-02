import React, { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CreateNote from './Components/CreateNote';
import Note from './Components/Note';
import { Box } from '@mui/material';

const App = () => {
  const [notes, setNotes] = useState([]);

  // Function to add a new note
  const addNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

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
        {/* Pass onAdd function as a prop */}
        <CreateNote onAdd={addNote} />

        {/* Render all notes */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          {notes.map((note, index) => (
            <Note key={index} title={note.title} content={note.content} />
          ))}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default App;
