import React from 'react';
import { TextField, Box, Paper, IconButton } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

const Note = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        m: 2,
        width: 300, // smaller width
        ml: 3,      // align left with left margin
        borderRadius: 2,
        bgcolor: 'white',
      }}
    >
      <Box display="flex" flexDirection="column" gap={1}>
        <TextField
          value="Sample Title"
          variant="standard"
          InputProps={{ disableUnderline: true, readOnly: true }}
        />

        <TextField
          value="This is a sample note content."
          multiline
          rows={3}
          fullWidth
          variant="standard"
          InputProps={{
            disableUnderline: true,
            readOnly: true,
            sx: {
              bgcolor: '#f9f9f9',
              borderRadius: 1,
              p: 1,
            },
          }}
        />

        <Box display="flex" justifyContent="flex-end" gap={1} mt={1}>
          <IconButton
            sx={{
              bgcolor: 'yellow',
              '&:hover': { bgcolor: '#fdd835' },
            }}
            aria-label="edit"
          >
            <EditIcon />
          </IconButton>
          <IconButton
            sx={{
              bgcolor: 'yellow',
              '&:hover': { bgcolor: '#fdd835' },
            }}
            aria-label="delete"
          >
            <DeleteOutlineIcon />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
};

export default Note;
