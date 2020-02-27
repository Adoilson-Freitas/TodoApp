import React from 'react'
import { BrowserRouter as Router, Route, } from 'react-router-dom'

import Todo from '../src/todo/todo'
import About from '../src/about/abaut'

const Routes = props => {
  return (
      <Router>
       <Route path="/"  exact component={Todo}/>
       <Route path="/todos"  exact component={Todo}/>
       <Route path="/about"  exact component={About}/>
      </Router>
  )
}

export default Routes