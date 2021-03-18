import api from '../services/api'

export function validateName (name: string){
  if (name.length < 2 || !name.trim()){
    return {
      isValid: false,
      message: 'Invalid name'
    }
  }
  return {
    isValid: true,
    message: null
  }
}

export async function validateUsername (username:string){
  if (username.length < 4 || username.includes(' ')){
    return {
      isValid: false,
      message: 'Insert at least a username with 4 characters and without spaces'
    }
  }
  const response = await api.get(`register/checkUsername?username=${username}`)
  const usernameAlreadyExists = response.data.userExists

  if (usernameAlreadyExists){
    return {
      isValid: false,
      message: 'Username already exists'
    }
  }

  return {
    isValid: true,
    message: null
  }
}
