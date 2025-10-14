import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    setSuccessMessage(null);
    setErrorMessage(null);

    const isNameValid = name.trim() !== '';
    const isEmailValid = email.trim() !== '';
    const isMessageValid = message.trim() !== '';

    setNameError(!isNameValid);
    setEmailError(!isEmailValid);
    setMessageError(!isMessageValid);

    if (isNameValid && isEmailValid && isMessageValid) {
      // Prepare template parameters for your notification email
      const notificationParams = {
        user_name: name,
        user_email: email, // This is where you'll receive their email
        message: message,
      };

      // Prepare template parameters for the autoresponder email
      const autoresponderParams = {
        user_name: name, // This will be used in the greeting
        user_email: email, // This is where the auto-reply will be sent TO
        message: message, // This will be included in the auto-reply
      };

      // Replace these with your actual EmailJS credentials
      const serviceId = 'service_wf1yai2'; // Same service for both emails
      const notificationTemplateId = 'template_elixulb'; // Your original template ID
      const autoresponderTemplateId = 'template_hjqsk26'; // The new autoresponder template ID
      const publicKey = 'YOUR_PUBLIC_KEY_HLAAUaQY-b-BPSAm9QERE'; // Same public key

      // Send the notification email to you
      emailjs.send(serviceId, notificationTemplateId, notificationParams, publicKey)
        .then(
          (response) => {
            console.log('NOTIFICATION SENT TO YOU!', response.status, response.text);

            // Send the autoresponder email back to the user
            emailjs.send(serviceId, autoresponderTemplateId, autoresponderParams, publicKey)
              .then(
                (autoResponse) => {
                  console.log('AUTORESPONDER SENT TO USER!', autoResponse.status, autoResponse.text);
                  setSuccessMessage('Your message has been sent successfully! A confirmation has been sent to your email.');
                },
                (autoError) => {
                  console.log('AUTORESPONDER FAILED...', autoError);
                  // Even if autoresponder fails, still show success for the main message
                  setSuccessMessage('Your message has been sent successfully! I will respond to you soon.');
                }
              );

          },
          (error) => {
            console.log('NOTIFICATION FAILED...', error);
            setErrorMessage('Failed to send your message. Please try again later.');
          },
        );
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          {successMessage && <Alert severity="success">{successMessage}</Alert>}
          {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

          <Box
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
            onSubmit={sendEmail}
          >
            <div className='form-flex'>
              <TextField
                required
                id="outlined-required-name"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (nameError) setNameError(false);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                fullWidth
                variant="outlined"
              />
              <TextField
                required
                id="outlined-required-email"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) setEmailError(false);
                }}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
                fullWidth
                variant="outlined"
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static-message"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (messageError) setMessageError(false);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
              fullWidth
              variant="outlined"
            />
            <Box textAlign="center" mt={2}>
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                type="submit"
                size="large"
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;