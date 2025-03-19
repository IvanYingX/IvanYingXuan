import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Grid } from '@mui/material';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', marginRight: '20px' }}>
        <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'center' }}> 
          Get in touch
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '30px', textAlign: 'center' }}>
          Even if it's just to have a random chat.
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              fullWidth
              required
              sx={{
                backgroundColor: '#fff',
                borderRadius: '4px',
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              fullWidth
              required
              sx={{
                backgroundColor: '#fff',
                borderRadius: '4px',
              }}
            />
          </Grid>
        </Grid>
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
          sx={{
            marginTop: '20px',
            backgroundColor: '#fff',
            borderRadius: '4px',
          }}
        />
        <TextField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          fullWidth
          required
          multiline
          rows={4}
          sx={{
            marginTop: '20px',
            backgroundColor: '#fff',
            borderRadius: '4px',
          }}
        />
        <Button
          variant="contained"
          sx={{
            marginTop: '20px',
            backgroundColor: "#444",
            transition: "0.2s",
            ":hover": {
              backgroundColor: "#111",
              transition: "0.2s",
            }
          }}
          type="submit"
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default ContactForm; 