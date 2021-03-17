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