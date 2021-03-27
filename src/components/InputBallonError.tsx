import React from 'react'

import '../styles/components/inputBallonError.css'

interface Props {
  message: string | null
}

function InputBallonError(props: Props) {
  return (
    <div className="ballon-error">
      <span className="error-text">{props.message}</span>
    </div>
  )
}

export default InputBallonError