import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { Typography, Button, Box, TextField } from '@mui/material';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import Alert from '../sections/Alert';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  '& .MuiTextField-root': { m: 1, width: '25ch' },
};

const initialValues = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

const SignUp = ({ setAlert, register }) => {
  const [values, setValues] = useState(initialValues);
  const { name, email, password, passwordConfirm } = values;

  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      setAlert('Passwords do not match', 'error');
    } else {
      register({ name, email, password });
    }
  };
  return (
    <Box
      component='form'
      sx={style}
      noValidate
      autoComplete='off'
      onSubmit={(e) => handleFormSubmit(e)}
    >
      <Typography id='registrationModal' variant='h6' component='h2'>
        Sign Up
      </Typography>
      <TextField
        required
        type='text'
        name='name'
        label='Name'
        placeholder='Name'
        value={name}
        onChange={(e) => handleInputChange(e)}
      />
      <TextField
        required
        type='email'
        name='email'
        label='Email'
        placeholder='Email'
        value={email}
        onChange={(e) => handleInputChange(e)}
      />
      <TextField
        required
        type='password'
        name='password'
        label='Password'
        placeholder='Password'
        value={password}
        onChange={(e) => handleInputChange(e)}
      />
      <TextField
        required
        type='password'
        name='passwordConfirm'
        label='Confirm Password'
        placeholder='Confirm Password'
        value={passwordConfirm}
        onChange={(e) => handleInputChange(e)}
      />
      <Button
        className='button'
        type='submit'
        variant='contained'
        color='primary'
        sx={{ display: 'block', mt: '5px' }}
      >
        Submit
      </Button>
      <Alert />
    </Box>
  );
};

SignUp.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};

export default connect(null, { setAlert, register })(SignUp);
