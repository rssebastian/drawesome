import React from 'react';
import { Grid } from '@mui/material';

const Bucket = (props) => {
  const { color } = props;
  return (
    <Grid
      item
      sx={{
        width: '65px',
        height: '65px',
        backgroundColor: { color },
        border: '3px dashed black',
        borderRadius: '5px',
      }}
    ></Grid>
  );
};

export default Bucket;
