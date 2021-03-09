import React from 'react'

import '../styles/pages/home.css'

function Home(){
  return (
    <div className="logout-content">
      <h1>You are logged</h1>
      <br/>
      <button className="logout-button">
        Logout
      </button>
    </div>
  )
}

export default Home