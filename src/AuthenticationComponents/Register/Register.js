import React, { useRef ,useEffect,useState} from 'react';
import './RegisterCss.css';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import userApi from '../../api/userApi.js';
import { AvForm, 
    AvGroup, 
    AvInput, 
    AvFeedback} from 'availity-reactstrap-validation';
import { useHistory } from "react-router-dom";

function Register({userList,changeData}){
    const [inputUser, setInputUser] = useState('');
    const [inputPass, setInputPass] = useState('');
    const [inputConfirm, setInputConfirm] = useState('');
    const [user,setUser] = useState('');
    const [dataSubmit,setDataSubmit] = useState({});
    const password1 = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/;
    const password2 = /^[a-z0-9A-Z]+$/i;
    const email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let history = useHistory();
    let Users = [...userList];
    const confirmUserName = () => {
        let string = '';
        for(let i of Users){
            string += `^${i.email}$|`;
        }
        return `(^((?!${string.substr(0,string.length-1)}).)*$)`;
    }
    const handleValidSubmit = ()=>{
        setUser(()=>{return{email:inputUser,password:inputPass}});
        changeData();
        history.push('/');
    }
    useEffect(() => {
        const createUser = async ()=>{
            if(user !== ''){
                try {
                    const response = await userApi.createUser(user);
                } catch (error) {
                    console.log(`error is: ${error}`);
                }
            }
        }
        createUser();
    },[user]);
    return(
        <div className="wrap-register">
            <div className="container d-flex flex-column align-items-center justify-content-center mb-5">
                <AvForm className="form d-flex flex-column align-items-center mt-5"  onValidSubmit={handleValidSubmit}>
                    <h1 className="mt-5">Account Register</h1>
                    <AvGroup className="formGroup mt-3">
                        <Label for="userEmail">User Email:</Label>
                        <div className="wrap-input">
                            <AvInput 
                                onChange={(e)=> setInputUser(e.target.value)}
                                className="input" 
                                type="email" name="email" 
                                id="userEmail" 
                                placeholder="Input the user email"
                                required
                                validate={{
                                    pattern:{value:confirmUserName(),errorMessage:'hello'}
                                }}></AvInput>
                            {inputUser === '' && <AvFeedback>The input field is empty!</AvFeedback>}
                            {email.test(inputUser) === false && inputUser !== '' && <AvFeedback>Invalid email! ex: exapmle@gmail.com</AvFeedback>}
                            {email.test(inputUser) === true && inputUser !== '' && <AvFeedback>This username already exists!</AvFeedback>}

                        </div>
                    </AvGroup>
                    <AvGroup className="formGroup">
                        <Label for="Password">Password:</Label>
                        <div className="wrap-input">
                            <AvInput
                                onChange={(e)=> setInputPass(e.target.value)}
                                className="input"  
                                type="password" name="password" 
                                id="Password"   
                                placeholder="Input the password"
                                required
                                validate={{
                                    required:{value:true,errorMessage:'The input field is empty!'},
                                    pattern:{value:password2,errorMessage:'Your password must be composed only with letter and numbers'},
                                    minLength: {value: 6, errorMessage: 'Your password must be between 6 and 16 characters'},
                                    maxLength: {value: 16, errorMessage: 'Your password must be between 6 and 16 characters'}
                                }}></AvInput>
                            {inputPass === '' && <AvFeedback>The input field is empty!</AvFeedback>}
                            {password1.test(inputPass)===false 
                                && inputPass !== '' 
                                && <AvFeedback>Your password must be between 6 and 16 characters!</AvFeedback>
                            }
                            {password2.test(inputPass)===false 
                                && inputPass.length > 6 
                                && inputPass !== '' 
                                && <AvFeedback>Your password must be composed only with letter and numbers!</AvFeedback>
                            }
                        </div>
                    </AvGroup>
                    <AvGroup className="formGroup">
                        <Label for="confirmPassword">Confirm Password:</Label>
                        <div className="wrap-input">
                            <AvInput
                                onChange={(e)=> setInputConfirm(e.target.value)}
                                className="input"  
                                type="password" name="confirm" 
                                id="confirmPassword" 
                                placeholder="Input the confirm Password"
                                required
                                validate={{
                                    required:{value:true,errorMessage:'The input field is empty!'},
                                    pattern:{value:`^${inputPass}$`,errorMessage:'Your password must be composed only with letter and numbers'},
                                }}></AvInput>
                            {inputConfirm === '' && <AvFeedback>The input field is empty!</AvFeedback>}
                            {inputConfirm !== inputPass && inputConfirm !=='' && <AvFeedback>The password confirm is wrong!</AvFeedback>}
                        </div>
                    </AvGroup>
                    <FormGroup className="mt-2" check>
                        <Label check>
                            <Input type="checkbox" ></Input>
                            Send me emails about new books, authors, and bookstores from Bookshop.
                        </Label>
                    </FormGroup>
                    <Button className="register mb-5 mt-5" color="danger">
                        Register
                    </Button>
                    <div className ="link mb-3">
                        <Link className="link-register" to="/login">Login as Existing Customer</Link>
                    </div>
                </AvForm>
            </div>
        </div>
    )
}

export default Register;