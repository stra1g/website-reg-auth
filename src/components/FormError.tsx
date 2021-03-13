import React from 'react'

import '../styles/components/formError.css'

interface FormErrorProps{
  statusCode: number
}

function FormError(props:FormErrorProps){
  switch(props.statusCode){
    case 401:
      return <p>The email or password you entered doesn't belong to an account. Please check your credentials and try again</p>
      break
    case 422:
      return <p>The email or password you entered doesn't have the correct type. Please check your credentials and try again</p>
      break
    default:
      return <p>Some error occurred in the process. Please, try again later.</p>
  }
}

export default FormError