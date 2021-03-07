import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'

function AppRoutes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default AppRoutes