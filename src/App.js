import React from 'react';
import './App.css';
import Header from './HeaderComponents/Header.js';
import Login from './LoginComponents/Login.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path="/">
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/dashboard">
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;