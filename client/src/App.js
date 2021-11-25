import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/layout/Landing';
import PaintRoom from './components/layout/PaintRoom';
import './assets/App.css';
import { CssBaseline } from '@mui/material';
import { loadUser } from './actions/auth';

import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/paintroom' element={<PaintRoom />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
