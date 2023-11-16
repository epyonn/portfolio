import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Box, TextField, Button, Typography , Paper} from '@mui/material';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (event) => {
    event.preventDefault();

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;
    
    const templateParams = {
      user_email: email,
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, userId)
      .then(response => {
        console.log('Email successfully sent!', response.status, response.text);
        setEmail('');
        setMessage('');
      }, err => {
        console.error('Failed to send email. Error: ', err);
      });
  };

  return (
    <div>
    <form onSubmit={sendEmail}>
      <Box display="flex" flexDirection="column" gap={2} maxWidth={700} margin="auto">
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          variant="outlined"
          InputProps={{ // Target the inner Input component
            style: { backgroundColor: 'white' }
          }}
        />
        <TextField
          label="Message"
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          variant="outlined"
          InputProps={{ // Target the inner Input component
            style: { backgroundColor: 'white' }
          }}
        />
        <Button type="submit" variant="contained" color="primary">
          Send Email
        </Button>
      </Box>
    </form>
  </div>
  );
};

export default ContactForm;
