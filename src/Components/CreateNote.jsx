import React from 'react';
import { TextField, Button, Box, Paper } from '@mui/material';

const CreateNote = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        m: 3,
        maxWidth: 500, // Reduced width
        mx: 'auto',
        borderRadius: 3, // Rounded corners (3 = 24px)
      }}
    >
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField label="Note Title" variant="outlined" fullWidth />
        <TextField
          label="Write a note"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
        />
        <Button
          variant="contained"
          sx={{
            bgcolor: 'yellow',
            color: 'black',
            fontWeight: 'bold',
            '&:hover': {
              bgcolor: '#fdd835', // Slightly darker yellow on hover
            },
          }}
        >
          Add
        </Button>
      </Box>
    </Paper>
  );
};

export default CreateNote;
