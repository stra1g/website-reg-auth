import React, { createContext, useState } from 'react'
import api from '../services/api'
import Cookies from 'js-cookie'

import history from '../utils/history'

interface AuthContextData{
  signed: boolean;
  user: object | null;
  signIn(data:object): Promise<void>
  signOut(): Promise<void>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC = ({children}) => {
  
  const [user, setUser] = useState<object | null>(null)

  async function signIn(data:object){
    
    const response = await api.post('login', data, { withCredentials: true })

    history.push('/home')
    setUser(response.data.filteredUser)
  }

  async function signOut(){
    // just gonna work when sends the JWT in request
    //const response = await api.post('/logout')
    //console.log(response)

    history.push('/')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{signed: Boolean(user), user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export {
  AuthContext,
  AuthProvider
}

