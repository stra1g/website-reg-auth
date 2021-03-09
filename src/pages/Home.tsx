import React, { useContext } from 'react'

import {AuthContext} from '../contexts/auth'

import '../styles/pages/home.css'

function Home(){
  const { signOut } = useContext(AuthContext)

  function handleButtonClick(){
    signOut()
  }

  return (
    <div className="logout-content">
      <h1>You are logged</h1>
      <br/>
      <button className="logout-button" onClick={handleButtonClick}>
        Sign Out
      </button>
    </div>
  )
}

export default Home