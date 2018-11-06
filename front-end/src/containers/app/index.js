import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import AllRequests from '../allRequests'
import './app.css'
import logo from './logo.svg'

const App = () => (
  <div>
    <header className="header">
      <div className="container">
        <div className="row align-items-center">
          <Link className="col-sm-2" to="/">
            <img className="header__logo" src={logo} alt="logo" />
          </Link>
          <Link className="col-sm-2 mt-2" to="/list">
            <h6>All Requests</h6>
          </Link>
        </div>
      </div>
    </header>

    <main className="container">
      <Route exact path="/" component={Home} />
      <Route exact path="/list" component={AllRequests} />
    </main>
  </div>
)

export default App
