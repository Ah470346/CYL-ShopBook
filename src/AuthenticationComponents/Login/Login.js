import React ,{useEffect,useRef,useState,useContext}from 'react';
import { useHistory } from "react-router-dom";
import './LoginCss.css';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import authApi from '../../api/authApi.js';
import {AuthApi} from '../../App.js';

function Login({userList}){
    let history = useHistory();
    const Auth = useContext(AuthApi);
    const [isLogin,setIsLogin] = useState(true);
    const inputUserEl = useRef(null);
    const inputPassEl = useRef(null);
    const fetchAuthentication = async (user) => {
        try {
            const response = await authApi.getToken(user);
        } catch (error) {
            console.log('Failed to fetch authentication: ', error);
        }
      }
    const handleSubmit = (event)=>{
        event.preventDefault();
        for(let i of userList){
            if(inputUserEl.current.value === i.email && inputPassEl.current.value === i.password){
                setIsLogin(true);
                fetchAuthentication(i);
                Auth.setAuth(true);
                history.push('/');
            }
        } 
        setIsLogin(false);
    }
    useEffect(() => {
    })
    return (
        <div className="wrap-login">
            <div className="container d-flex flex-column align-items-center justify-content-center mb-5">
                <Form className="form d-flex flex-column align-items-center mt-5" onSubmit={handleSubmit}>
                    <h1 className="mt-5 mb-1">Login</h1>
                    {isLogin === false && <p className="errorAccount">Account or password is incorrect!</p>}
                    <FormGroup className="formGroup mt-5">
                        <Label for="Email">Email</Label>
                        <div className="wrap-input">
                            <Input  
                                innerRef={inputUserEl}
                                className="input" 
                                type="email" name="email" 
                                id="Email" 
                                placeholder="Input the user email"
                                required 
                                ></Input>
                            <FontAwesomeIcon className="iconLogin" icon={faUser}></FontAwesomeIcon>
                            <span className="wrap-input-after"></span>
                        </div>
                    </FormGroup>
                    <FormGroup className="formGroup">
                        <Label for="Password">Password</Label>
                        <div className="wrap-input">
                            <Input
                                innerRef={inputPassEl}
                                className="input"  
                                type="password" name="password" 
                                id="Password" 
                                placeholder="Input the password"
                                required></Input>
                            <FontAwesomeIcon className="iconLogin" icon={faLock}></FontAwesomeIcon>
                            <span className="wrap-input-after"></span>
                        </div>
                    </FormGroup>
                    <FormGroup className="mt-2" check>
                        <Label check>
                            <Input type="checkbox" ></Input>
                            Remember me
                        </Label>
                    </FormGroup>
                    <Button className="login mb-5 mt-5"  color="danger">
                        Login
                    </Button>
                    <div className ="link mb-3">
                        <Link className="link-login" to="/register">Create a new account</Link>
                        {' '}| {''}
                        <Link className="link-login" to="/">Forgot Password?</Link>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Login;   
