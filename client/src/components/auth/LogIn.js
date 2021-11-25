import React, { useState } from 'react';
import { Typography, Button, Box, TextField } from '@mui/material';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import { Route, Routes, Navigate } from 'react-router-dom';

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
  email: '',
  password: '',
};

const LogIn = ({ login, isAuthenticated }) => {
  const [values, setValues] = useState(initialValues);
  const { email, password } = values;

  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return (
      <Routes>
        <Route path='/' element={<Navigate to='/paintroom' />} />
      </Routes>
    );
  }
  return (
    <Box
      component='form'
      sx={style}
      noValidate
      autoComplete='off'
      onSubmit={(e) => handleFormSubmit(e)}
    >
      <Typography id='loginModal' variant='h6' component='h2'>
        Log In
      </Typography>
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
      <Button
        className='button'
        type='submit'
        variant='contained'
        color='primary'
        sx={{ display: 'block', mt: '5px' }}
      >
        Submit
      </Button>
    </Box>
  );
};

LogIn.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(LogIn);
