import React, { createContext } from 'react'
import api from '../services/api'

interface AuthContextData{
  signed: boolean;
  user: object;
  signIn(data:object): Promise<void>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)


const AuthProvider: React.FC = ({children}) => {
  async function signIn(data:object){
    const response = await api.post('login', data)
    const { token, user } = response.data
    console.log(response.data)
  }

  return (
    <AuthContext.Provider value={{signed: false, user: {}, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export {
  AuthContext,
  AuthProvider
}

