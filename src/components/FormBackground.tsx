import React, { ReactNode } from 'react'

import '../styles/components/formBackground.css'

interface Props {
  children: ReactNode
}

function FormBackground(props: Props) {
  return (
    <div className="main">
      <div className="content">
        <div className="form">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default FormBackground