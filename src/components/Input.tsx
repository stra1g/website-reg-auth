import React from 'react'
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'

import '../styles/components/input.css'

interface Props {
  label: string
  type: string
  value: string
  name: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  validData?: {
    isValid: boolean 
    message: string | null
  }
}

function Input(props: Props) {
  return (
    <div className="input-box">
      <label htmlFor="">
        <div className="label-form">
          <div className="text-label">
            <div className="text">
              <span>{props.label}</span>
            </div>
          </div>
          <div className="input-label">
            <div className="input">
              <input
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                autoComplete="off"
              />
              <div className="error-icon-box">
                { props.validData && props.value !== '' &&
                  <span>
                    {props.validData.isValid ? <FaCheckCircle color="#42078E" /> : <FaTimesCircle color="#ED4956" />}
                  </span>
                }
              </div>
            </div>
            { props.validData && props.value !== '' && !props.validData.isValid &&
              <div className="ballon-error">                        
                  <span>{props.validData.message}</span>
              </div>
            } 
          </div>
        </div>
      </label>
    </div>
  )
}

export default Input