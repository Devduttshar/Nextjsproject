import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Index from './index';
import { Box, Button, Typography, Container } from '@mui/material'; // Import Material UI components
import LogoutIcon from '@mui/icons-material/Logout'; // Import the Logout icon from Material UI

const Logout = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, log me out!',
    });

    if (result.isConfirmed) {
      // Perform logout action (e.g., clear tokens, call API, etc.)
      localStorage.removeItem('token'); // Clear the token or any other session data
      setIsLoggedOut(true); // Update the state to reflect the logged-out status

      // Optional: You can also display a success message or redirect after some time
      Swal.fire('Logged Out!', 'You have been successfully logged out.', 'success');
    }
  };

  return (
    <>
      <Index />
      <Container sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {isLoggedOut ? 'You are logged out' : 'Logout Page'}
        </Typography>
        {!isLoggedOut && (
          <Button
            variant="contained"
            color="error"
            onClick={handleLogout}
            startIcon={<LogoutIcon />} // Adds the logout icon before the text
            sx={{
              borderRadius: '20px',
              fontSize: '16px',
              padding: '10px 20px',
              textTransform: 'none',
            }}
          >
            Log me out
          </Button>
        )}
        {isLoggedOut && (
          <Typography variant="body1" sx={{ mt: 2 }}>
            Please log in again.
          </Typography>
        )}
      </Container>
    </>
  );
};

export default Logout;
