import React from 'react'
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'

import '../styles/components/inputIcon.css'

interface Props {
  isValid: boolean
}

function InputIcon(props: Props) {
  return (
    <div className="error-icon-box">
      <span>
        {props.isValid ? <FaCheckCircle color="#42078E" /> : <FaTimesCircle color="#ED4956" />}
      </span>
    </div>
  )
}

export default InputIcon