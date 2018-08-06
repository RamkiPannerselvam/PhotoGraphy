import React from 'react'
import { Switch, Route } from 'react-router-dom'
import signin from './Signin'
import Register from './Register'
import PhotographyApp from './PhotographyApp'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Register}/>
      <Route exact path='/RegisterNow' component={Register}/>
      <Route exact path='/Register' component={signin}/>
      <Route path='/Example' component={signin}/>
      <Route path='/Signin' component={PhotographyApp}/>
    </Switch>
  </main>
)

export default Main