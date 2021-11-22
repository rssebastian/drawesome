import React from 'react';
import Palette from './Palette';
import Canvas from './Canvas';

const CanvasSide = () => {
  return (
    <div className='canvas-side'>
      <Palette />
      <Canvas />
    </div>
  );
};

export default CanvasSide;
