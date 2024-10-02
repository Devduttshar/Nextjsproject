import React, { useState } from "react";
import axios from "axios";
import Index from "./index";
import { TextField, Button, Box, Typography, Alert } from "@mui/material";
import SendIcon from "@mui/icons-material/Send"; // Import Send icon from Material UI

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  // Handle form data changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate the form
  const validateForm = () => {
    const { name, email, message } = formData;
    let validationErrors = {};
    let isValid = true;

    if (!name) {
      validationErrors.name = "Name is required";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      validationErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      validationErrors.email = "Email is not valid";
      isValid = false;
    }

    if (!message) {
      validationErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(validationErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post("http://localhost:5000/api/contacts", formData);
        setSuccess("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      } catch (error) {
        console.error("Error sending message:", error.response ? error.response.data : error.message);
        setSuccess("Failed to send message. Please try again.");
      }
    } else {
      setSuccess("");
    }
  };

  return (
    <>
      <Index />
      <Box sx={{ maxWidth: 500, mx: "auto", mt: 4, p: 3, boxShadow: 3, borderRadius: 2, backgroundColor: "#f9f9f9" }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Contact Us
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={Boolean(errors.name)}
            helperText={errors.name}
            fullWidth
            margin="normal"
            variant="outlined"
          />

          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={Boolean(errors.email)}
            helperText={errors.email}
            fullWidth
            margin="normal"
            variant="outlined"
          />

          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            error={Boolean(errors.message)}
            helperText={errors.message}
            fullWidth
            multiline
            rows={4}
            margin="normal"
            variant="outlined"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
            fullWidth
            sx={{ mt: 2 }}
          >
            Send Message
          </Button>
        </form>

        {success && (
          <Alert severity="success" sx={{ mt: 3 }}>
            {success}
          </Alert>
        )}
      </Box>
    </>
  );
};

export default Contact;
