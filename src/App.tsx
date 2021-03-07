import React from 'react';
import { Router } from 'react-router-dom'

import './styles/global.css'

import {AuthProvider} from './contexts/auth'

import Routes from './routes/index'
import history from './utils/history'

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </AuthProvider>
  );
}

export default App;
