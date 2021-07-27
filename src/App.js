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
import booksApi from './api/booksApi.js';
import Cookies from 'universal-cookie';
import menuBookApi from './api/menuBooksApi.js';
import slideBooksApi from './api/slideBooksApi.js';
import {Skeleton,Spin} from 'antd';

const cookies = new Cookies();
export const AuthApi  = React.createContext();
export const LoadContext  = React.createContext();

function App() {
  const [auth,setAuth] = useState(false);
  const [load,setLoad] = useState(false);
  const [spin,setSpin] = useState(false);
  const [booksList,setBooksList] = useState([]);
  const [menuBook,setMenuBook] = useState([]);
  const [slideBooks,setSlideBooks] = useState([]);
  const readCookie = ()=>{
    if(cookies.get('token')){
      setAuth(true);
    } else {
      setAuth(false);
    }
  }
  // get slide books to Carousel 
  useEffect(()=>{
    const fetslideBooksList = async () =>{
      try {
        const response = await slideBooksApi.getAll();
        if(response !== undefined){
          setSlideBooks(response);
        }
      } catch (error) {
        console.log('Failed to fetch books list: ', error);
      }
    }
    fetslideBooksList();
  },[]);
  // get books Api
  useEffect(()=>{
    const fetchBooksList = async () => {
      try {
        const response = await booksApi.getAll();
        if(response !== undefined){
          setBooksList(response);
        }
      } catch (error) {
        console.log('Failed to fetch books list: ', error);
      }
    }
    fetchBooksList(); 
  },[]);

  // get menuBooks to category and header;
  useEffect(()=>{
    
    const fetchMenuBook = async () => {
      try {
        const response = await menuBookApi.getAll();
        if(response !== undefined){
          setMenuBook(response);
        }
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
            <LoadContext.Provider value={{setLoad,setSpin}}>
                <Spin spinning={spin}>
                    <Skeleton active loading={load}>
                        <Router>
                            <Routes menuBook={[...menuBook]} slideBooks={[...slideBooks]}/>
                        </Router>
                    </Skeleton>
                </Spin>
            </LoadContext.Provider>
        </AuthApi.Provider>
      </div>
  );
}

const Routes = ({menuBook,slideBooks})=>{
  const [changeData , setChangeData] = useState(false);
  const Auth = useContext(AuthApi);
  const change = () => {
    setChangeData(!changeData);
  }
  return (
        <Switch>
          <Route exact path="/" >
            <Header></Header>
            <Body menuBook={[...menuBook]} slideBooks={[...slideBooks]}></Body> 
          </Route>
          <ProtectLoginRoute exact path="/login" auth={Auth.auth}>
            <Login changeData={change}/>
          </ProtectLoginRoute>
          <Route exact path="/alreadyLogin">
            <p>You Already Login</p>
          </Route>
          <Route exact path="/register">
            <Register changeData={change}/>
          </Route>
          <Route exact path="/shop">
            <Header></Header>
          </Route>
          <Route exact path="/contact">
            <Header></Header>
          </Route>
          <Route exact path="/blog">
            <Header></Header>
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
