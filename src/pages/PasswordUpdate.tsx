import React, { FormEvent, useState, useContext, ChangeEvent } from 'react'
import { Link } from 'react-router-dom'
import { validatePassword, validateConfirmPassword } from '../utils/inputValidation'
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'

import {AuthContext} from '../contexts/auth'

import logo from '../images/logo.svg'

import '../styles/pages/login.css'

interface ValidInput{
  password: {
    isValid: boolean,
    message: string
  }
  confirmPassword: {
    isValid: boolean,
    message: string
  }
}

function PasswordUpdate() {
  const { signed, signIn, authError } = useContext(AuthContext)

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [validInput, setValidInput] = useState<ValidInput>({} as ValidInput)

  async function handlePasswordChange(event: ChangeEvent<HTMLInputElement>){
    const { value } = event.target
    const { name } = event.target

    const { isValid, message } = validatePassword(value)

    const newValidInputs = {...validInput, [name]: {isValid, message}}
    setValidInput(newValidInputs)

    setPassword(value)
  }

  async function handleConfirmPasswordChange(event: ChangeEvent<HTMLInputElement>){
    const { value } = event.target
    const { name } = event.target

    const { isValid, message } = validateConfirmPassword(value, password)

    const newValidInputs = {...validInput,[name]: {isValid, message}}
    setValidInput(newValidInputs)

    setConfirmPassword(value)
  }

  function activeButton(){
    if (!password || !confirmPassword){
      return true
    }

    if (!validInput.password.isValid || !validInput.confirmPassword.isValid){
      return true
    }

    return false
  }

  async function handleSubmit(event: FormEvent){
    event.preventDefault()

    const data = {
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
            <h1><span>Reset Password</span></h1>
          </div>
          <div className="info-form">
            <form onSubmit={handleSubmit}>
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
                      { password !== '' && !validInput.password.isValid &&
                        <div className="ballon-error">                        
                            <span>{validInput.password.message}</span>
                        </div>
                      } 
                    </div>
                  </div>
                </label>
              </div>

              <div className="input-box">
                <label htmlFor="">
                  <div className="label-form">
                    <div className="text-label">
                      <div className="text">
                        <span>Confirm Password</span>
                      </div>
                    </div>
                    <div className="input-label">
                      <div className="input">
                        <input 
                          type="password" 
                          name="confirmPassword" 
                          value={confirmPassword}
                          onChange={handleConfirmPasswordChange}
                        />
                        <div className="error-icon-box">
                          { confirmPassword !== '' &&  
                            <span>
                              { validInput.confirmPassword.isValid ? <FaCheckCircle color="#42078E"/> : <FaTimesCircle color="#ED4956"/> }
                            </span>
                          }       
                        </div>
                      </div>
                      { confirmPassword !== '' && !validInput.confirmPassword.isValid &&
                        <div className="ballon-error">                        
                            <span>{validInput.confirmPassword.message}</span>
                        </div>
                      } 
                    </div>
                  </div>
                </label>
              </div>

              <div className="button-box">
                <button className="confirm-button" type="submit" disabled={activeButton()}>
                  Update Password
                </button>
              </div>
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

export default PasswordUpdate;