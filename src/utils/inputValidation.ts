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

export async function validateEmail(email:string){

  const usuario = email.substring(0, email.indexOf('@'))
  const dominio = email.substring(email.indexOf('@') + 1, email.length)

  if (
      !email.includes('@') ||
      email.includes(' ') ||
      usuario.length <= 1 ||
      usuario.includes('@') ||
      dominio.length <= 3 || 
      !dominio.includes('.') ||
      dominio.includes('@') ||
      dominio.indexOf('.') == 0 ||
      dominio.indexOf('.') == dominio.length - 1
    ){
    return {
      isValid: false, 
      message: 'Insert a valid email'
    }
  }

  const response = await api.get(`register/checkEmail?email=${email}`)
  const emailAlreadyExists = response.data.userExists

  if (emailAlreadyExists){
    return {
      isValid: false, 
      message: 'Email already taken'
    }
  }

  return {
    isValid: true,
    message: null
  }
}

export function validatePassword(password:string){
  const uppercaseLetters = /[A-Z]/;
  const lowercaseLetters = /[a-z]/; 
  const numbers = /[0-9]/;
  const especialCharacters = /[!|@|#|$|%|^|&|*|(|)|-|_]/;

  if (password.length < 6){
    return {
      isValid: false,
      message: 'Your password must contain at least 6 characters including an uppercase letter, simbols and numbers'
    }
  }

  var containsUppercaseLetter;
  var containsLowercaseLetter;
  var containsNumber;
  var containsEspecialCharacter;

  for (let i = 0; i < password.length; i++){
    if (uppercaseLetters.test(password[i])){
      containsUppercaseLetter = true
    } else if (lowercaseLetters.test(password[i])){
      containsLowercaseLetter = true
    } else if (numbers.test(password[i])){
      containsNumber = true
    } else if (especialCharacters.test(password[i])){
      containsEspecialCharacter = true;
    }
  }
  
  if (!containsUppercaseLetter || !containsLowercaseLetter || !containsNumber || !containsEspecialCharacter){
    return {
      isValid: false,
      message: 'Your password must contain at least 6 characters including an uppercase and a lowercase letter, simbols and numbers'
    }
  }

  return {
    isValid: true,
    message: null
  }
} 