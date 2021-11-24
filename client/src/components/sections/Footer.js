import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{
        py: 3,
        px: 3,
        backgroundColor: '#42a5f5',
        position: 'fixed',
        width: '100%',
      }}
    >
      <Container maxWidth='sm'>
        <Typography variant='body1'>This is my footer</Typography>
      </Container>
    </Box>
  );
};

export default Footer;
