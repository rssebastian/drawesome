import React from 'react';
import reactCSS from 'reactcss';
import { Grid } from '@mui/material';
import { SketchPicker } from 'react-color';
import Bucket from './Bucket';
import { setColor } from '../../actions/canvas';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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

  componentDidMount() {
    const { r, g, b } = this.state.color;
    console.log(
      `Color is being set to rgb(${r},${g},${b}) in componentDidMount`
    );
    this.props.setColor(r, g, b);
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    const { r, g, b } = this.state.color;
    console.log(`Color is being set to rgb(${r},${g},${b}) in handleClose`);
    setColor(r, g, b);
    this.setState({ displayColorPicker: false });
  };

  handleChange = (color) => {
    const { r, g, b } = color.rgb;
    this.props.setColor(r, g, b);
    console.log(`Color is being set to rgb(${r},${g},${b}) in handleChange`);
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

Palette.propTypes = {
  setColor: PropTypes.func.isRequired,
  rgb: PropTypes.object,
};

const mapStateToProps = (state) => ({
  rgb: state.canvas,
});

export default connect(mapStateToProps, { setColor })(Palette);
