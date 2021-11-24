import React from 'react';
import NavBar from '../sections/Navbar';
import Palette from '../sections/Palette';
import Canvas from '../sections/Canvas';
import StickyFooter from '../sections/Footer';
import { Grid } from '@mui/material';

const PaintRoom = () => {
  return (
    <>
      <NavBar />
      <Grid container columns={24}>
          <Palette />
          <Canvas />
      </Grid>
      <StickyFooter />
    </>
  );
};

export default PaintRoom;
