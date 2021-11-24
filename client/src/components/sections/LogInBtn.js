import React, { useState } from 'react';
import { Modal, Grid, Button } from '@mui/material';
import LogIn from '../auth/LogIn';

const LogInBtn = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid item>
      <Button
        className='button'
        variant='contained'
        color='primary'
        onClick={handleOpen}
      >
        Log In
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-login'
        aria-describedby='modal-modal-showsLogin'
      >
        <LogIn />
      </Modal>
    </Grid>
  );
};

export default LogInBtn;
