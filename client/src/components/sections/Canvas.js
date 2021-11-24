import React, { useEffect, useRef, useState } from 'react';
import { Grid } from '@mui/material';

const Canvas = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    // canvas.width = window.innerWidth * 2;
    // canvas.height = window.innerHeight * 2;
    canvas.style.width = `100%`;
    canvas.style.height = `100%`;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    console.log(canvas);
    console.log(canvas.getBoundingClientRect());

    const context = canvas.getContext(`2d`);
    context.scale(1, 1);
    context.lineCap = `round`;
    context.strokeStyle = `black`;
    context.lineWidth = 5;
    contextRef.current = context;

    // document.addEventListener('mousemove', mouseEvent);
    // document.addEventListener('mousedown', mouseEvent);
    // document.addEventListener('mouseup', mouseEvent);
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  // const mouse = {
  //   x: 0,
  //   y: 0,
  //   lastX: 0,
  //   lastY: 0,
  //   b1: false,
  //   b2: false,
  //   b3: false,
  //   buttonNames: ['b1', 'b2', 'b3'],
  // };

  // const mouseEvent = (event) => {
  //   var bounds = canvasRef.current.getBoundingClientRect();
  //   mouse.x = event.pageX - bounds.left - event.scrollX;
  //   mouse.y = event.pageY - bounds.top - event.scrollY;
  //   mouse.x /= bounds.width;
  //   mouse.y /= bounds.height;

  //   mouse.x *= canvasRef.width;
  //   mouse.y *= canvasRef.height;

  //   if (event.type === 'mousedown') {
  //     mouse[mouse.buttonNames[event.which - 1]] = true; // set the button as down
  //   } else if (event.type === 'mouseup') {
  //     mouse[mouse.buttonNames[event.which - 1]] = false; // set the button up
  //   }
  // };

  return (
    <Grid item xs={23} sm={22} lg={21} xl={21} className='canvas'>
      <canvas
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      ></canvas>
    </Grid>
  );
};

export default Canvas;
