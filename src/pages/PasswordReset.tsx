import React, { FormEvent, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import api from '../services/api'
import history from '../utils/history'

import logo from '../images/logo.svg'
import SubmitButton from '../components/SubmitButton'
import Input from '../components/Input'

import '../styles/pages/passwordReset.css'

function PasswordReset() {

  const [email, setEmail] = useState('')

  async function handleSubmit(event: FormEvent){
    event.preventDefault()

    await api.post('reset-password', {email})

    history.push('/login')
  }

  return (
    <div className="main">
      <div className="content">
        <div className="form">
          <div className="header-form">
            <img src={logo} alt="logo" />
            <h1><span>Reset Password</span></h1>
          </div>

          <div className="info-form">
            <form onSubmit={handleSubmit}>
              <Input
                label="Email"
                type="text"
                value={email}
                name="email"
                onChange={event => setEmail(event.target.value)}
              />

              <SubmitButton text="Send reset link to email"/>
            </form>
          </div>

          <div className="footer-form">
            <div className="footer-block">
              <Link to="/login" className="footer-link">
                <span>Sign in to app</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PasswordReset;