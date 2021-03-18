export const validateName = (name: string) => {
  if (name.length < 2){
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

export const validateUsername = (username:string) => {
  if (username.length < 4){
    return {
      isValid: false,
      message: 'Insert at least a username with 4 characters'
    }
  }
  return {
    isValid: true,
    message: null
  }
}