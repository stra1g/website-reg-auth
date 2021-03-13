import React from 'react'

interface FormErrorProps{
  statusCode: number
}

function FormError(props:FormErrorProps){
  switch(props.statusCode){
    case 401:
      return <p>deu erro 401</p>
      break
    case 422:
      return <p>deu erro 422</p>
      break
    default:
      return <p>deu erro 500</p>
  }
}

export default FormError