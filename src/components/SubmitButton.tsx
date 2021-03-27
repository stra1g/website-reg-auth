import React from 'react'

import '../styles/components/submitButton.css'

interface Props{
  text: string
  disabled?: boolean
}

function SubmitButton(props: Props){
  return (
    <div className="button-box">
    { props.disabled ? 
      <button className="confirm-button" type="submit" disabled={props.disabled}>
        {props.text}
      </button> : 
      <button className="confirm-button" type="submit">
      {props.text}
      </button>
    }
  </div>
  )
}

export default SubmitButton