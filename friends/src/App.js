import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';

import Login from './components/Login'
import Home from './components/Home'
import FriendsList from './components/FriendsList'
import PrivateRoute from './components/PrivateRoute'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="nav-bar">
            <div className="nav-link">
              <Link to="/login">Login</Link>
            </div>
            <div className="nav-link">
            </div>
          </div>

          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/protected" component={FriendsList} />
        </div>
      </Router>  
    );
  }
}

export default App;
