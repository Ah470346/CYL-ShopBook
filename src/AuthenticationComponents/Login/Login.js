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
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function Login(){
    let history = useHistory();
    const Auth = useContext(AuthApi);
    const inputUserEl = useRef(null);
    const [isLogin,setIsLogin] = useState(true);
    const inputPassEl = useRef(null);
    const handleSubmit = async (event)=>{
        event.preventDefault();
        try {
            const response = await authApi.getAuth({email:inputUserEl.current.value,password:inputPassEl.current.value});
            if(response){
                Auth.setAuth(true);
                history.push('/');
                setIsLogin(true);
            }
        } catch (error) {
            console.log('Failed to fetch authentication: ', error);
            setIsLogin(false);
        } 
    }
    return (
        <div className="wrap-login">
            <div className="container d-flex flex-column align-items-center justify-content-center pb-4">
                <Form className="form d-flex flex-column align-items-center" onSubmit={handleSubmit}>
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
