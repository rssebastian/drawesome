import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Bucket = ({ r, g, b }) => {
  const [color, setColor] = useState('white');

  const onClick = () => {
    // console.log('onClick firing');
    // console.log(`Changing color to: rgb(${r},${g},${b})`);
    // setColor(`rgb(${r},${g},${b})`);
  };

  return (
    <Grid
      item
      sx={{
        width: '65px',
        height: '65px',
        border: '3px dashed black',
        borderRadius: '5px',
      }}
      style={{
        background: { color },
      }}
      onClick={onClick}
    ></Grid>
  );
};

Bucket.propTypes = {
  r: PropTypes.string,
  g: PropTypes.string,
  b: PropTypes.string,
};

const mapStateToProps = (state) => ({
  r: state.canvas.r,
  g: state.canvas.g,
  b: state.canvas.b,
});

export default connect(mapStateToProps, {})(Bucket);
