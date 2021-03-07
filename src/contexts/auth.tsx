import React, { createContext, useState } from 'react'
import api from '../services/api'

import history from '../utils/history'

interface AuthContextData{
  signed: boolean;
  user: object | null;
  signIn(data:object): Promise<void>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC = ({children}) => {
  
  const [user, setUser] = useState<object | null>(null)

  async function signIn(data:object){
    
    const response = await api.post('login', data)

    history.push('/home')
    setUser(response.data.filteredUser)
  }

  return (
    <AuthContext.Provider value={{signed: Boolean(user), user, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export {
  AuthContext,
  AuthProvider
}

