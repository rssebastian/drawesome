import React from 'react';
import reactCSS from 'reactcss';
import { Grid } from '@mui/material';
import { SketchPicker } from 'react-color';
import Bucket from './Bucket';

class Palette extends React.Component {
  state = {
    displayColorPicker: false,
    color: {
      r: '241',
      g: '112',
      b: '19',
      a: '1',
    },
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb });
  };

  render() {
    const styles = reactCSS({
      default: {
        color: {
          width: '65px',
          height: '65px',
          borderRadius: '5px',
          background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
        },
        swatch: {
          // padding: '5px',
          background: '#fff',
          border: '3px solid black',
          borderRadius: '8px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });

    const numBuckets = 8;

    return (
      <Grid
        container
        item
        xs={1}
        md={2}
        lg={3}
        sx={{
          height: '87vh',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          borderRight: '5px solid black',
          paddingleft: '5px',
          alignContent: 'center',
        }}
      >
        <Grid item>
          <div style={styles.swatch} onClick={this.handleClick}>
            <div style={styles.color} />
          </div>
          {this.state.displayColorPicker ? (
            <div style={styles.popover}>
              <div style={styles.cover} onClick={this.handleClose} />
              <SketchPicker
                color={this.state.color}
                onChange={this.handleChange}
              />
            </div>
          ) : null}
        </Grid>
        {[...Array(numBuckets)].map((e, i) => (
          <Bucket key={i}></Bucket>
        ))}
      </Grid>
    );
  }
}

export default Palette;
