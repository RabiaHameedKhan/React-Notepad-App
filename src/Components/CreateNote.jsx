// CreateNote.js
import React, { useState } from 'react';
import { TextField, Box, Paper, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = ({ onAdd }) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setNote((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitNote = () => {
    onAdd(note);
    setNote({ title: "", content: "" });
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        m: 3,
        maxWidth: 500,
        mx: 'auto',
        borderRadius: 3,
        position: 'relative',
      }}
    >
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField
          onChange={InputEvent}
          value={note.title}
          name="title"
          label="Note Title"
          variant="outlined"
          fullWidth
        />

        <TextField
          onChange={InputEvent}
          value={note.content}
          name="content"
          label="Write a note..."
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { border: 'none' },
              bgcolor: '#f9f9f9',
              borderRadius: 2,
              padding: 1,
            },
          }}
        />

        <Box display="flex" justifyContent="flex-end">
          <IconButton
            onClick={submitNote}
            sx={{
              bgcolor: 'yellow',
              color: 'black',
              '&:hover': { bgcolor: '#fdd835' },
              mt: 1,
            }}
          >
            <AddIcon />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
};

export default CreateNote;
