import React, { Fragment } from 'react';
import NavBar from './Navbar';
import InspirationSide from './InspirationSide';
import CanvasSide from './CanvasSide';

const PaintRoom = () => {
  return (
    <Fragment>
      <NavBar />
      <div className='container'>
        <InspirationSide />
        <CanvasSide />
      </div>
    </Fragment>
  );
};

export default PaintRoom;
