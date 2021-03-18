import React, { FormEvent, useState, ChangeEvent, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'

import api from '../services/api'
import { validateName, validateUsername, validateEmail, validatePassword } from '../utils/inputValidation'

import logo from '../images/logo.svg'

import '../styles/pages/register.css'

interface ValidInput {
  name: {
    isValid: boolean,
    message: string
  }
  username: {
    isValid: boolean,
    message: string 
  }
  email:{
    isValid: boolean,
    message: string 
  }
  password:{
    isValid: boolean,
    message: string 
  }
}

function Register() {
  const history = useHistory()

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [validInput, setValidInput] = useState<ValidInput>({} as ValidInput)

  function handleNameChange(event: ChangeEvent<HTMLInputElement>){
    const { value } = event.target
    const { name } = event.target

    const { isValid, message } = validateName(value)
    
    const newValidInputs = {...validInput, [name]: {isValid, message}}
    setValidInput(newValidInputs) 

    setName(value)
  }

  async function handleUsernameChange(event: ChangeEvent<HTMLInputElement>){
    const { value } = event.target
    const { name } = event.target

    const { isValid, message } = await validateUsername(value)

    const newValidInputs = {...validInput, [name]: {isValid, message}}
    setValidInput(newValidInputs)

    setUsername(value)
  }

  async function handleEmailChange(event: ChangeEvent<HTMLInputElement>){
    const { value } = event.target
    const { name } = event.target
    
    const { isValid, message } = await validateEmail(value)

    const newValidInputs = {...validInput, [name]: {isValid, message}}
    setValidInput(newValidInputs)

    setEmail(value)
  }

  async function handlePasswordChange(event: ChangeEvent<HTMLInputElement>){
    const { value } = event.target
    const { name } = event.target

    const { isValid, message } = validatePassword(value)

    const newValidInputs = {...validInput, [name]: {isValid, message}}
    setValidInput(newValidInputs)

    setPassword(value)
  }

  function activeButton(){
    
    if (!name || !username || !email || !password){
      return true
    } 

    if (!validInput.name.isValid ||
        !validInput.username.isValid ||
        !validInput.email.isValid ||
        !validInput.password.isValid
      ){
        return true
      }
    return false
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
                              { validInput.name.isValid ? <FaCheckCircle color="#42078E"/> : <FaTimesCircle color="#ED4956"/>}
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
                              { validInput.username.isValid ? <FaCheckCircle color="#42078E"/> : <FaTimesCircle color="#ED4956"/> }
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
                              { validInput.email.isValid ? <FaCheckCircle color="#42078E"/> : <FaTimesCircle color="#ED4956"/> }
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
                              { validInput.password.isValid ? <FaCheckCircle color="#42078E"/> : <FaTimesCircle color="#ED4956"/> }
                            </span>
                          }       
                        </div>
                      </div>
                    </div>
                  </div>
                </label>
              </div>

              <div className="button-box">
                <button className="confirm-button" id="confirm-button" type="submit" disabled={activeButton()}>
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