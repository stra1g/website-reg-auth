import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../images/logo.svg'

import '../styles/pages/login.css'

function Login() {
  return (
    <div className="main">
      <div className="content">
        <div className="form">
          <div className="header-form">
            <img src={logo} alt="logo" />
            <h1><span>Log in to app</span></h1>
          </div>

          <div className="info-form">
            <form>
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
                        <input type="text" name="email" />
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
                        <input type="password" name="password" />
                      </div>
                    </div>
                  </div>
                </label>
              </div>

              <div className="button-box">
                <button className="confirm-button" type="submit">
                  Register
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