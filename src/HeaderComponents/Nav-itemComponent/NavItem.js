import React,{useState,useRef,useEffect} from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import './NavItemCSS.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown} from '@fortawesome/free-solid-svg-icons';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import ListGroupCollapse from '../ListGroupCollapse.js';
import { faMinus} from '@fortawesome/free-solid-svg-icons';

function Nav_Item ({title, link, onClick,active,content}){  
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const [collapse, setIsOpen2] = useState({});

    const toggle2 = (id) => {
        if(window.innerWidth < 766){
            setIsOpen2({collapse: collapse.collapse === id ? null : id} );
        }
      }

    const linkEl = useRef(null);
    const span1El = useRef(null);
    const span2El = useRef(null);
    const activeMenu = () =>{
        if(active === true){
            linkEl.current.style.backgroundColor = "#00abe0";
            span1El.current.style.visibility = "visible";
            span2El.current.style.visibility = "visible";
            span1El.current.style.opacity = "1";
            span2El.current.style.transform = "scaleX(1)";
        } else if(active == false) {
            linkEl.current.style.background = "none";
            span1El.current.style.visibility = "hidden";
            span2El.current.style.visibility = "hidden";
            span1El.current.style.opacity = "0";
            span2El.current.style.transform = "scaleX(0)";
        }
    }
    const collapseEvent = (e)=> {
        e.preventDefault();
        e.stopPropagation();
        if(window.innerWidth < 766){
            return toggle();
        }
    }
    useEffect(()=>{
        activeMenu();
    },[active]);
    return(
        <NavItem onClick={collapseEvent} className="wrap-nav-link ml-3 mr-5 mr-md-0">
            <Link ref={linkEl} 
                className={classNames('nav-link','nav-link-color')} 
                onClick={onClick}   
                to={link}>{title} 
                <span ref={span1El} className={classNames('custom-top-nav-link')}></span>
                <span ref={span2El} className={classNames('custom-bot-nav-link')}></span>
                {
                    content.length > 0 && <FontAwesomeIcon className="nav-icon-down ml-2" icon={faChevronDown}/>
                }
                {
                    content.length > 0 && isOpen==false && <FontAwesomeIcon className="nav-icon-plus ml-2" icon={faPlus}/>
                }
                {
                    content.length > 0 && isOpen==true && <FontAwesomeIcon className="nav-icon-minus ml-2" icon={faMinus}/>
                }
                { content.length > 0 && <Collapse isOpen={isOpen}>
                        <ul className="sub-nav-link">
                        {
                            // Using collapse component inside of a loop
                            content.length > 1 && content.map((item,index) => {
                                
                                return(
                                    <ListGroupCollapse
                                        key={index}
                                        id={item.id}
                                        itemMenu={item}
                                        isOpend = {collapse.collapse === item.id}
                                        toggle={toggle2}
                                    />
                                )
                            })
                        }
                        {
                            content.length === 1 && content.map((item,index)=>{
                                return (
                                    <ul key={index} className="sub-nav-ul">
                                        {
                                            item.arrMenu.map((i,index)=>{
                                                return(
                                                    <li key={index} className="sub-nav-li single">
                                                        <Link className="sub-nav-li-link" to="/">{i}</Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    
                                )
                            })
                        }
                        </ul>
                    </Collapse>
                }
            </Link>
        </NavItem>
    )
}

export default Nav_Item;