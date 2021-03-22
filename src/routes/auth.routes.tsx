import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from '../pages/Login'
import Register from '../pages/Register'
import Landing from '../pages/Landing'
import PasswordReset from '../pages/PasswordReset'

function AuthRoutes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/password-reset" component={PasswordReset} />
      </Switch>
    </BrowserRouter>
  )
}

export default AuthRoutes;