import React,{useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Button
  } from 'reactstrap';
  import './HeaderCSS.css';
  import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Logo1 from '../images/Logo1.svg';
import Logo2 from '../images/Logo2.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle} from '@fortawesome/free-solid-svg-icons';


function Header(){
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <div className="wrap-logo container">
                <div className="row">
                    <div className="col-md-4">
                        <img className="image-logo" src={Logo1}></img>
                    </div>
                    <div className="col-md-5">
                        <div className="search-book input-group ml-auto">
                            <input type="text" className="form-control" placeholder="Search your books"/>
                            <div className="input-group-append">
                                <Button className="search-button" color="primary">
                                    <Link className="search-link">
                                        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="wrap-cart mt-3">
                            <Link className="link-cart" to="/">
                                <div className="icon-cart">
                                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                                    <div className="count-cart">9</div>
                                </div>
                                <p>MY CART</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar className="navbar" dark expand="md">
                <NavbarBrand className="nav-brand">
                    <Link><img src={Logo2}></img></Link>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto ml-5" navbar>
                        <NavItem>
                            <NavLink>
                                <Link className="nav-link" to="/">HOME</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link className="nav-link" to="/">SHOP</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link className="nav-link" to="/">CONTACT</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link className="nav-link" to="/">BLOG</Link>
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem className="nav-right ml-md-auto mr-auto ml-5">
                            <NavLink>
                                <Link className="nav-link nav-cart" to="/">
                                    <FontAwesomeIcon icon={faShoppingCart}/>
                                    <div className="count-cart">9</div>
                                </Link>
                            </NavLink>
                        </NavItem>
                        <NavItem className="nav-right ml-md-auto mr-md-5 mr-auto ml-5">
                            <NavLink>
                                <Link className="nav-link" to="/login">
                                    <FontAwesomeIcon icon={faUserCircle}/>
                                </Link>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;