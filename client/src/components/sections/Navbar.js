import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import BrushIcon from '@mui/icons-material/Brush';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { useTheme } from '@mui/material/styles';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const theme = useTheme();
  const authLinks = (
    <Button color='inherit' component={Link} to={'/'} onClick={logout}>
      Logout
    </Button>
  );

  const guestLinks = (
    <Button color='inherit' component={Link} to={'/'}>
      Home
    </Button>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Link to='/'>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
            >
              <BrushIcon color='secondary' fontSize='large' />
            </IconButton>
          </Link>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Drawesome
          </Typography>
          {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
          <IconButton
            size='large'
            edge='end'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
