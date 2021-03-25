import React, { FormEvent, useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import FormError from '../components/FormError'
import {AuthContext} from '../contexts/auth'

import logo from '../images/logo.svg'

import '../styles/pages/login.css'

function Login() {
  const { signed, signIn, authError } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(event: FormEvent){
    event.preventDefault()

    const data = {
      email,
      password
    }
    
    await signIn(data)
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

          {authError &&
            <div className="error-content">
              <FormError statusCode={authError}/>
            </div>
          }

          <div className="footer-form">
            <div className="footer-block">
              <Link to="/password-sendLink" className="footer-link">
                <span>Forgot password?</span>
              </Link>
              <span className="footer-divider">.</span>
              <Link to="/register" className="footer-link">
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