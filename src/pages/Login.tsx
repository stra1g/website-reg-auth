import React, { FormEvent, useState, useContext } from 'react'
import { Link } from 'react-router-dom'


import {AuthContext} from '../contexts/auth'
import SubmitButton from '../components/SubmitButton'
import Input from '../components/Input'
import FormHeader from '../components/FormHeader'
import FormError from '../components/FormError'

import '../styles/pages/login.css'

function Login() {
  const { signIn, authError } = useContext(AuthContext)

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
          <FormHeader title="Log in to app"/>

          <div className="info-form">
            <form onSubmit={handleSubmit}>
              <Input
                label="Email"
                type="text"
                value={email}
                name="email"
                onChange={event => setEmail(event.target.value)}
              />

              <Input
                label="Password"
                type="password"
                value={password}
                name="password"
                onChange={event => setPassword(event.target.value)}
              />

              <SubmitButton text="Log In"/>
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