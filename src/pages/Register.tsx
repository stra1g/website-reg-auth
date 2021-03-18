import React, { FormEvent, useState, ChangeEvent } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'

import api from '../services/api'
import { validateName, validateUsername, validateEmail, validatePassword } from '../utils/inputValidation'

import logo from '../images/logo.svg'

import '../styles/pages/register.css'
import { error } from 'console'

interface Errors {
  name: {
    message: string
  }
  username: {
    message: string | null
  }
  email:{
    message: string | null
  }
  password:{
    message: string | null
  }
}

function Register() {
  const history = useHistory()

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<Errors>({} as Errors)

  function handleNameChange(event: ChangeEvent<HTMLInputElement>){
    const { value } = event.target
    const { name } = event.target

    const { message } = validateName(value)

    if (message){
      const newErrors = {...errors, [name]: {message}}
      setErrors(newErrors) 
    }
    setName(value)
  }

  async function handleUsernameChange(event: ChangeEvent<HTMLInputElement>){
    const { value } = event.target
    const { name } = event.target

    const { message } = await validateUsername(value)

    if (message){
      const newErrors = {...errors, [name]: {message}}
      setErrors(newErrors) 
    }
    setUsername(value)
  }

  async function handleEmailChange(event: ChangeEvent<HTMLInputElement>){
    const { value } = event.target
    const { name } = event.target
    
    const { message } = await validateEmail(value)

    if (message){
      const newErrors = {...errors, [name]: {message}}
      setErrors(newErrors) 
    }
    setEmail(value)
  }

  async function handlePasswordChange(event: ChangeEvent<HTMLInputElement>){
    const { value } = event.target
    const { name } = event.target

    const { message } = validatePassword(value)

    if (message){
      const newErrors = {...errors, [name]: {message}}
      setErrors(newErrors) 
    }
    setPassword(value)
  }

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
        <div className="form">
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
                          onChange={handleNameChange}
                        />
                        <div className="error-icon-box">
                          { name !== '' &&  
                            <span>
                              { errors.name ? <FaCheckCircle color="#42078E"/> : <FaTimesCircle color="#ED4956"/>}
                            </span>
                          }     
                        </div>
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
                          onChange={handleUsernameChange}
                        />
                        <div className="error-icon-box">
                          { username !== '' &&  
                            <span>
                              { errors.username ? <FaCheckCircle color="#42078E"/> : <FaTimesCircle color="#ED4956"/> }
                            </span>
                          }       
                        </div>
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
                          onChange={handleEmailChange}
                        />
                        <div className="error-icon-box">
                          { email !== '' &&  
                            <span>
                              { errors.email ? <FaCheckCircle color="#42078E"/> : <FaTimesCircle color="#ED4956"/> }
                            </span>
                          }       
                        </div>
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
                          onChange={handlePasswordChange}
                        />
                        <div className="error-icon-box">
                          { password !== '' &&  
                            <span>
                              { errors.password ? <FaCheckCircle color="#42078E"/> : <FaTimesCircle color="#ED4956"/> }
                            </span>
                          }       
                        </div>
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