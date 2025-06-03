import React, { useState } from 'react';
import { TextField, Box, Paper, IconButton } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

const Note = ({ index, title, content, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editableNote, setEditableNote] = useState({ title, content });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableNote((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onEdit(index, editableNote);
    setIsEditing(false);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        m: 2,
        width: 300,
        ml: 3,
        borderRadius: 2,
        bgcolor: 'white',
      }}
    >
      <Box display="flex" flexDirection="column" gap={1}>
        <TextField
          name="title"
          value={editableNote.title}
          onChange={handleChange}
          variant={isEditing ? 'outlined' : 'standard'}
          InputProps={{
            disableUnderline: !isEditing,
            readOnly: !isEditing,
          }}
        />

        <TextField
          name="content"
          value={editableNote.content}
          onChange={handleChange}
          multiline
          rows={3}
          fullWidth
          variant={isEditing ? 'outlined' : 'standard'}
          InputProps={{
            disableUnderline: !isEditing,
            readOnly: !isEditing,
            sx: {
              bgcolor: '#f9f9f9',
              borderRadius: 1,
              p: 1,
            },
          }}
        />

        <Box display="flex" justifyContent="flex-end" gap={1} mt={1}>
          {isEditing ? (
            <IconButton
              onClick={handleSave}
              sx={{ bgcolor: 'yellow', '&:hover': { bgcolor: '#fdd835' } }}
            >
              <SaveIcon />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => setIsEditing(true)}
              sx={{ bgcolor: 'yellow', '&:hover': { bgcolor: '#fdd835' } }}
            >
              <EditIcon />
            </IconButton>
          )}

          <IconButton
            onClick={() => onDelete(index)}
            sx={{ bgcolor: 'yellow', '&:hover': { bgcolor: '#fdd835' } }}
          >
            <DeleteOutlineIcon />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
};

export default Note;
