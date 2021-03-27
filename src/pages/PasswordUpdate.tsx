import React, { FormEvent, useState, ChangeEvent, useEffect } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import { validatePassword, validateConfirmPassword } from '../utils/inputValidation'
import * as queryString from 'query-string'

import api from '../services/api'
import SubmitButton from '../components/SubmitButton'
import Input from '../components/Input'
import FormHeader from '../components/FormHeader'

import '../styles/pages/passwordUpdate.css'

interface ValidInput{
  password: {
    isValid: boolean,
    message: string | null
  }
  confirmPassword: {
    isValid: boolean,
    message: string | null
  }
}

function PasswordUpdate(props: RouteComponentProps) {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [validInput, setValidInput] = useState<ValidInput>({} as ValidInput)

  useEffect(() => {
    const { isValid, message } = validateConfirmPassword(confirmPassword, password)

    const newValidInputs = {...validInput, 'confirmPassword': {isValid, message}}
    setValidInput(newValidInputs)
  }, [password])

  async function handleConfirmPasswordChange(event: ChangeEvent<HTMLInputElement>){
    const { value } = event.target
    const { name } = event.target

    const { isValid, message } = validateConfirmPassword(value, password)

    const newValidInputs = {...validInput,[name]: {isValid, message}}
    setValidInput(newValidInputs)

    setConfirmPassword(value)
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

    const { token, user_id } = queryString.parse(props.location.search)
    
    const link = `update-password?token=${token}&user_id=${user_id}`

    await api.put(link, data)
  }

  return (
    <div className="main">
      <div className="content">
        <div className="form">
          <FormHeader title="Reset password"/>

          <div className="info-form">
            <form onSubmit={handleSubmit}>
              <Input
                label="Password"
                type="password"
                value={password}
                name="password"
                onChange={handlePasswordChange}
                validData={validInput.password}
              />

              <Input
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                name="confirmPassword"
                onChange={handleConfirmPasswordChange}
                validData={validInput.confirmPassword}
              />

              <SubmitButton text="Update Password" disabled={activeButton()}/>
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