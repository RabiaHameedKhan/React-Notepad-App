import React, { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CreateNote from './Components/CreateNote';
import Note from './Components/Note';
import { Box } from '@mui/material';

const App = () => {
  const [notes, setNotes] = useState([]);

  // Add a note
  const addNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  // Delete a note
  const deleteNote = (indexToDelete) => {
    setNotes((prevNotes) => prevNotes.filter((_, index) => index !== indexToDelete));
  };

  // Edit a note
  const editNote = (indexToEdit, updatedNote) => {
    setNotes((prevNotes) =>
      prevNotes.map((note, index) => (index === indexToEdit ? updatedNote : note))
    );
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Box sx={{ flex: 1, p: 2 }}>
        <CreateNote onAdd={addNote} />
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          {notes.map((note, index) => (
            <Note
              key={index}
              index={index}
              title={note.title}
              content={note.content}
              onDelete={deleteNote}
              onEdit={editNote}
            />
          ))}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default App;
