import React, {useContext} from 'react'

import {AuthContext} from '../contexts/auth'

import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

function Routes (){
  const { signed } = useContext(AuthContext)

  if (signed){
    return <AppRoutes />
  }
  return <AuthRoutes />
}

export default Routes;