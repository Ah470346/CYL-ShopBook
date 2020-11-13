import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './HeaderComponents/Header.js';
import Login from './AuthenticationComponents/Login/Login.js';
import Register from './AuthenticationComponents/Register/Register.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import userApi from './api/userApi.js';

function App() {
  const [userList , setUserList] = useState([]);
  const [changeData , setChangeData] = useState(false);
  const change = () => {
    setChangeData(!changeData);
  }
  useEffect(() => {
    const fetchUserList = async () => {
      try {
          const response = await userApi.getAll();
          setUserList(response);
      } catch (error) {
          console.log('Failed to fetch books list: ', error);
      }
    }
    setTimeout(fetchUserList,1000);
  },[changeData]);
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path="/home">
          </Route>
          <Route exact path="/login">
            <Login userList={[...userList]} changeData={change}/>
          </Route>
          <Route exact path="/register">
            <Register userList={[...userList]} changeData={change}/>
          </Route>
          <Route exact path="/shop">
          </Route>
          <Route exact path="/contact">
          </Route>
          <Route exact path="/blog">
          </Route>
        </Switch>
        <div className="div"></div>
      </div>
    </Router>
  );
}

export default App;
