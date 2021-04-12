import React,{useRef, useState,useEffect,useContext} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from 'reactstrap';
import './HeaderCSS.css';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import Logo1 from '../images/Logo1.svg';
import Logo2 from '../images/Logo2.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle} from '@fortawesome/free-solid-svg-icons';
import Nav_Item from './Nav-itemComponent/NavItem.js';
import Cookies from 'universal-cookie';
import {AuthApi} from '../App.js';

const cookies = new Cookies();

function Header(){ 
    const Auth = useContext(AuthApi);
    const [cookieToken,setCookieToken] = useState(cookies.get('token'));
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const navBarEl = useRef(null);
    const p = useRef(null);

    const logout = ()=>{
        cookies.remove('token');
        setCookieToken(undefined);
        Auth.setAuth(false);
    }

    const [Options,setOptions] = useState([{
        
        title: "HOME",
        link: "/home",
        active: true,
        content: []
    },
    {
        title: "SHOP",
        link: "/shop",
        active: false,
        content:[
            {
                id:1,
                nameMenu:"Jacket",
                arrMenu:["hello hello hello hello","hello hello hello hello"
                ,"hello hello hello hello","hello hello hello hello"]
            },
            {
                id:2,
                nameMenu:"Jacket",
                arrMenu:["hello hello hello hello","hello hello hello hello"
                ,"hello hello hello hello","hello hello hello hello"]
            },
            {
                id:3,
                nameMenu:"Jacket",
                arrMenu:["hello hello hello hello","hello hello hello hello"
                ,"hello hello hello hello","hello hello hello hello"]
            }
        ]
    },
    {
        title: "CONTACT",
        link: "/contact",
        active: false,
        content:[
            {
                nameMenu:"",
                arrMenu:["hello hello hello hello","hello hello hello hello"
                ,"hello hello hello hello","hello hello hello hello"]
            }
        ]
    },
    {
        title: "BLOG",
        link: "/blog",
        active: false,
        content:[
            {
                nameMenu:"",
                arrMenu:["hello hello hello hello","hello hello hello hello"
                ,"hello hello hello hello","hello hello hello hello"]
            }
        ]
    }]);
    
    function ChangeActive(title){
        let arr = Options.map((item)=>{
            if(item.title === title){
                return {...item,active: true};
            }
            return{...item,active: false};
        });
        setOptions(arr);
    }

    const scrollHeader = ()=>{
        window.onscroll = function(){myFunction()};
        let sticky = navBarEl.current.offsetTop;

        function myFunction() {
            if(window.pageYOffset >= sticky){
                navBarEl.current.classList.add('sticky');
            } else {
                navBarEl.current.classList.remove('sticky');
            }
        }
    }
    
    useEffect(() => {
        scrollHeader();
    }, [])
    useEffect(() => {
        setTimeout(() => {
            setCookieToken(cookies.get('token'));
        },500);
    })
    return (
        <div >
            <div className="wrap-logo container">
                <div className="top-header row">
                    <div className="col-md-4">
                        <img className="image-logo" src={Logo1} ></img>
                    </div>
                    <div className="col-md-5">
                        <div className="search-book input-group ml-auto">
                            <input type="text" className="form-control" placeholder="Search your books"/>
                            <div className="input-group-append">
                                <Button className="search-button" color="primary">
                                    <Link className="search-link" to='/'>
                                        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 pl-lg-5 pl-md-4">
                        <div className="wrap-cart mt-3">
                            <Link className="link-cart" to="/">
                                <div className="icon-cart">
                                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                                    <div className="count-cart">9</div>
                                </div>
                                <p ref={p}>MY CART</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={navBarEl}>
            <Navbar  className="navbar" dark expand="md">
                <Link to='/'><img src={Logo2}></img></Link>
                <NavbarToggler onClick={toggle} />
                <Collapse className="nav-collapse" isOpen={isOpen} navbar>
                    <Nav className="mr-auto ml-2" navbar>
                        {
                            Options.map((item,index)=>{
                                return (<Nav_Item 
                                    title={item.title} 
                                    link={item.link} 
                                    key={index}
                                    onClick={() => ChangeActive(item.title)}
                                    active={item.active}
                                    content={item.content}
                                    />
                                )
                                })
                        }
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem className="nav-right ml-md-auto mr-md-4 mr-auto ml-5">
                            <Link className="nav-link nav-cart" to="/">
                                <FontAwesomeIcon icon={faShoppingCart}/>
                                <div className="count-cart">9</div>
                            </Link>
                        </NavItem>
                        <NavItem className="nav-right ml-md-auto mr-md-5 mr-auto ml-5">
                            <Link className="nav-link auth" to='/'>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav >
                                        <FontAwesomeIcon icon={faUserCircle}/>
                                    </DropdownToggle>
                                    { 
                                        cookieToken===undefined &&   
                                        <DropdownMenu right>
                                            <DropdownItem>
                                                <Link className="auth-link" to='/login'>Login</Link>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <Link className="auth-link" to='/register'>Sign up</Link>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    }
                                     { 
                                        cookieToken &&   
                                        <DropdownMenu right>
                                            <DropdownItem>
                                                <Link className="auth-link" to='/account'>My Account</Link>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <Link className="auth-link" to='/wishlist'>My Wishlist</Link>
                                            </DropdownItem>
                                            <DropdownItem onClick={logout}>
                                                <Link className="auth-link" to='/login'>logout</Link>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    }
                                </UncontrolledDropdown>
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            </div>
        </div>
    );
}

export default Header;