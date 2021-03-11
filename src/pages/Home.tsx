import React, { useContext, useEffect } from 'react'

import api from '../services/api'

import {AuthContext} from '../contexts/auth'

import '../styles/pages/home.css'

function Home(){
  const { signOut } = useContext(AuthContext)

  useEffect(() => {
    async function test () {
      const response = await api.get('testJWT')

      console.log(response)
    }

    test()
  }, [])

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