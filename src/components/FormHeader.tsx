import React from 'react'

import logo from '../images/logo.svg'
import '../styles/components/formHeader.css'

interface Props {
  title: string
}

function FormHeader(props: Props){
  return (
    <div className="header-form">
      <img src={logo} alt="logo" />
      <h1><span>{props.title}</span></h1>
    </div>
  )
}

export default FormHeader