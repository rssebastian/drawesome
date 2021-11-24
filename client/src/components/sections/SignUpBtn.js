import React, { useState } from 'react';
import { Modal, Grid, Button } from '@mui/material';
import SignUp from '../auth/SignUp';

const SignUpBtn = () => {
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
        Sign Up
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-signup'
        aria-describedby='modal-modal-showsRegistration'
      >
        <SignUp />
      </Modal>
    </Grid>
  );
};

export default SignUpBtn;
