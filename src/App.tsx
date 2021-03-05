import React from 'react';
import './styles/global.css'

import AuthContext from './contexts/auth'

import Routes from './routes/'

function App() {
  return (
    <AuthContext.Provider value={{signed: true}}>
      <Routes />
    </AuthContext.Provider>
  );
}

export default App;
