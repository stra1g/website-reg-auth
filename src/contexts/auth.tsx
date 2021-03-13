import React, { createContext, useState } from 'react'
import api from '../services/api'
import Cookies from 'js-cookie'

import history from '../utils/history'

interface AuthContextData{
  signed: boolean;
  userId: number | undefined;
  signIn(data:object): Promise<void>
  signOut(): Promise<void>
  authError: number | null
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC = ({children}) => {
  const currentUser = Cookies.get('c_usr') ? Number(Cookies.get('c_usr')) : undefined
  const [authError, setAuthError] = useState<number | null>(null)
  const [userId, setUserId] = useState<number | undefined>(currentUser)

  async function signIn(data:object){
    try {
      const response = await api.post('login', data, { withCredentials: true })
      
      const { userId } = response.data
      
      Cookies.set('c_usr', String(userId))

      history.push('/home')
      setAuthError(null)
      setUserId(userId)
    } catch(e){
      setAuthError(e.response.data.statusCode)
    }
  }

  async function signOut(){
    // just gonna work when sends the JWT in request
    const response = await api.post('/logout')

    Cookies.remove('c_usr')

    history.push('/')
    setUserId(undefined)
  }

  return (
    <AuthContext.Provider value={{signed: Boolean(userId), userId, signIn, signOut, authError }}>
      {children}
    </AuthContext.Provider>
  )
}

export {
  AuthContext,
  AuthProvider
}

