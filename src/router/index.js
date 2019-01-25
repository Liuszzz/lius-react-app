import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../pages/home'
import Next from '../pages/next'

class IndexRouter extends React.PureComponent {
  render() {
    return (
    <BrowserRouter>
        <Switch>
            <Route path='/next' exact component={Next}/>
            <Route path='/' exact component={Home}/>
        </Switch>
    </BrowserRouter>)
  }
}

export default IndexRouter
