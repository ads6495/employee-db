import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import AddEmployeePage from './components/AddEmployeePage'
import AllEmployeePage from './components/AllEmployeePage'
import EmployeePage from './components/EmployeePage'
import NavBar from './components/NavBar'



const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={AllEmployeePage}></Route>
        <Route exact path="/new" component={AddEmployeePage}></Route>
        <Route exact path="/:result" component={EmployeePage}></Route>
      </Switch>
    </Router >

  )
}

export default App
