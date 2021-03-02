import React, { FormEvent, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import api from '../services/api'

import logo from '../images/logo.svg'


import '../styles/pages/login.css'

function Login() {
  const history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(event: FormEvent){
    event.preventDefault()

    const data = {
      email,
      password
    }

    await api.post('login', data).then((response) => console.log(response))

    history.push('/home')
  }

  return (
    <div className="main">
      <div className="content">
        <div className="form">
          <div className="header-form">
            <img src={logo} alt="logo" />
            <h1><span>Log in to app</span></h1>
          </div>

          <div className="info-form">
            <form onSubmit={handleSubmit}>
              <div className="input-box">
                <label htmlFor="">
                  <div className="label-form">
                    <div className="text-label">
                      <div className="text">
                        <span>Email</span>
                      </div>
                    </div>
                    <div className="input-label">
                      <div className="input">
                        <input 
                          type="text" 
                          name="email" 
                          value={email}
                          onChange={event => setEmail(event.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </label>
              </div>

              <div className="input-box">
                <label htmlFor="">
                  <div className="label-form">
                    <div className="text-label">
                      <div className="text">
                        <span>Password</span>
                      </div>
                    </div>
                    <div className="input-label">
                      <div className="input">
                        <input 
                          type="password" 
                          name="password" 
                          value={password}
                          onChange={event => setPassword(event.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </label>
              </div>

              <div className="button-box">
                <button className="confirm-button" type="submit">
                  Log In
                </button>
              </div>
            </form>
          </div>

          <div className="footer-form">
            <div className="footer-block">
              <span>Forgot password?</span>
              <span className="footer-divider">.</span>
              <Link to="/register" className="sign-up-link">
                <span>Sign up to app</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;