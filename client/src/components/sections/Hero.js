import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Grid, Button } from '@mui/material';
import backgroundVideo from '../../assets/color_pencil_waves.mp4';
import SignUpBtn from '../sections/SignUpBtn';
import LogInBtn from './LogInBtn';

const Hero = () => {
  return (
    <>
      <video autoPlay loop muted id='video'>
        <source src={backgroundVideo} type='video/mp4' />
      </video>
      <Container maxWidth='sm' id='hero' elevation={4}>
        <Typography
          variant='h2'
          align='center'
          color='textPrimary'
          gutterBottom
        >
          Welcome to Drawesome
        </Typography>
        <Typography variant='h5' align='center' color='textSecondary' paragraph>
          Let's draw something awesome :)
        </Typography>
        <div>
          <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
            <SignUpBtn />
            <LogInBtn />
            <Grid item>
              <Link to='/paintroom'>
                <Button className='button' variant='contained' color='primary'>
                  Jump In
                </Button>
              </Link>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default Hero;
