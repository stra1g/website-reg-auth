import React, { FormEvent, useState, ChangeEvent, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'

import api from '../services/api'
import { validateName, validateUsername, validateEmail, validatePassword } from '../utils/inputValidation'
import SubmitButton from '../components/SubmitButton'
import Input from '../components/Input'

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
  email: {
    isValid: boolean,
    message: string
  }
  password: {
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

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    const { name } = event.target

    const { isValid, message } = validateName(value)

    const newValidInputs = { ...validInput, [name]: { isValid, message } }
    setValidInput(newValidInputs)

    setName(value)
  }

  async function handleUsernameChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    const { name } = event.target

    const { isValid, message } = await validateUsername(value)

    const newValidInputs = { ...validInput, [name]: { isValid, message } }
    setValidInput(newValidInputs)

    setUsername(value)
  }

  async function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    const { name } = event.target

    const { isValid, message } = await validateEmail(value)

    const newValidInputs = { ...validInput, [name]: { isValid, message } }
    setValidInput(newValidInputs)

    setEmail(value)
  }

  async function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    const { name } = event.target

    const { isValid, message } = validatePassword(value)

    const newValidInputs = { ...validInput, [name]: { isValid, message } }
    setValidInput(newValidInputs)

    setPassword(value)
  }

  function activeButton() {

    if (!name || !username || !email || !password) {
      return true
    }

    if (!validInput.name.isValid ||
      !validInput.username.isValid ||
      !validInput.email.isValid ||
      !validInput.password.isValid
    ) {
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
            <form onSubmit={handleSubmit} className="form-content">
              <Input 
              label="Name"
              type="text"
              value={name}
              name="name"
              onChange={handleNameChange}
              validData={validInput.name}
              />

              <Input 
              label="Username"
              type="text"
              value={username}
              name="username"
              onChange={handleUsernameChange}
              validData={validInput.username}
              />

              <Input
                label="Email"
                type="text"
                value={email}
                name="email"
                onChange={handleEmailChange}
                validData={validInput.email}
              />

              <Input
                label="Password"
                type="password"
                value={password}
                name="password"
                onChange={handlePasswordChange}
                validData={validInput.password}
              />

              <SubmitButton text="Register" disabled={activeButton()} />

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