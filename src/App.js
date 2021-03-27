import React,{useState,useEffect,useContext} from 'react';
import './App.css';
import Header from './HeaderComponents/Header.js';
import Login from './AuthenticationComponents/Login/Login.js';
import Register from './AuthenticationComponents/Register/Register.js';
import Body from './BodyComponents/Body.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import userApi from './api/userApi.js';
import booksApi from './api/booksApi.js';
import Cookies from 'universal-cookie';
import menuBookApi from './api/menuBooksApi.js';

const cookies = new Cookies();
export const AuthApi  = React.createContext();

function App() {
  const [auth,setAuth] = useState(false);
  const [booksList,setBooksList] = useState([]);
  const [menuBook,setMenuBook] = useState([]);
  const readCookie = ()=>{
    if(cookies.get('token')){
      setAuth(true);
    } else {
      setAuth(false);
    }
  }
  useEffect(()=>{
    const fetchBooksList = async () => {
      try {
        const response = await booksApi.getAll();
        setBooksList(response);
      } catch (error) {
        console.log('Failed to fetch books list: ', error);
      }
    }
    fetchBooksList(); 
  },[]);

  useEffect(()=>{
    const fetchMenuBook = async () => {
      try {
        const response = await menuBookApi.getAll();
        setMenuBook(response);
      } catch (error) {
        console.log('Failed to fetch books list: ', error);
      }
    }
    fetchMenuBook(); 
  },[]);
  useEffect(()=>{
    readCookie();
  },[auth]);
  return (
      <div className="App">
        <AuthApi.Provider value={{auth,setAuth}}>
          <Router>
            <Header></Header>
            <Routes/>
            <Body menuBook={[...menuBook]}></Body> 
          </Router>
        </AuthApi.Provider>
      </div>
  );
}

const Routes = ()=>{
  const [userList , setUserList] = useState([]);
  const [changeData , setChangeData] = useState(false);
  const Auth = useContext(AuthApi);
  const change = () => {
    setChangeData(!changeData);
  }
  useEffect(() => {
    const fetchUserList = async () => {
      try {
          const response = await userApi.getAll();
          setUserList(response);
      } catch (error) {
          console.log('Failed to fetch users list: ', error);
      }
    }
    setTimeout(fetchUserList,1000);
  },[changeData]);
  return (
        <Switch>
          <Route exact path="/home" >
          </Route>
          <ProtectLoginRoute exact path="/login" auth={Auth.auth}>
            <Login userList={[...userList]} changeData={change}/>
          </ProtectLoginRoute>
          <Route exact path="/alreadyLogin">
            <p>You Already Login</p>
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
          <ProtectAccountRoute exact path="/account" auth={Auth.auth}>
            <p>Welcome this is Account</p>
          </ProtectAccountRoute>
          <ProtectWishListRoute exact path="/wishlist" auth={Auth.auth}>
            <p>Welcome this is wishlist</p>
          </ProtectWishListRoute>
        </Switch>
  )
}

const ProtectLoginRoute = ({auth,children,...rest})=>{
  return (
    <Route
      {...rest}
      render = {()=> !auth ? (
        children
      ):
        (
          <Redirect to='/alreadyLogin'></Redirect>
        )
      }
    />
  )
}

const ProtectAccountRoute = ({auth,children,...rest})=>{
  return (
    <Route
      {...rest}
      render = {()=> auth ? (
        children
      ):
        (
          <Redirect to='/login'></Redirect>
        )
      }
    />
  )
}

const ProtectWishListRoute = ({auth,children,...rest})=>{
  return (
    <Route
      {...rest}
      render = {()=> auth ? (
        children
      ):
        (
          <Redirect to='/login'></Redirect>
        )
      }
    />
  )
}

export default App;
