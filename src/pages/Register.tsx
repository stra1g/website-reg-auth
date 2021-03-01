import React, { FormEvent, useState  } from 'react'
import { Link, useHistory } from 'react-router-dom'
import api from '../services/api'

import logo from '../images/logo.svg'

import '../styles/pages/register.css'

function Register() {
  const history = useHistory()

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const data = {
      name, 
      username, 
      email, 
      password
    }

    await api.post('register', data).then()

    history.push('/')
  }

  return (
    <div className="main">
      <div className="content">
        <div className="form-register">
          <div className="header-form">
            <img src={logo} alt="logo" />
            <h1><span>Sign up to app</span></h1>
          </div>

          <div className="info-form">
            <form onSubmit={handleSubmit}>
              <div className="input-box">
                <label htmlFor="">
                  <div className="label-form">
                    <div className="text-label">
                      <div className="text">
                        <span>Name</span>
                      </div>
                    </div>
                    <div className="input-label">
                      <div className="input">
                        <input
                          type="text"
                          name="name"
                          value={name}
                          onChange={event => setName(event.target.value)}
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
                        <span>Username</span>
                      </div>
                    </div>
                    <div className="input-label">
                      <div className="input">
                        <input
                          type="text"
                          name="username"
                          value={username}
                          onChange={event => setUsername(event.target.value)}
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
                  Register
                </button>
              </div>
            </form>
          </div>

          <div className="footer-form">
            <div className="footer-block">
              <span> Already have an account?</span>
              <Link to="/login" className="sign-in-link">
                <span className="text-sign-in">Sign in</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Register