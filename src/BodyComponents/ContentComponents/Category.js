import React,{useState,useRef,useEffect} from 'react';
import { ListGroup, 
        ListGroupItem,
        Collapse,
        NavItem } from 'reactstrap';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import './Category.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import SubCategory from './subCategory.js';





function Category ({menuBook}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const collapseEvent = (e)=> {
        e.preventDefault();
        e.stopPropagation();
        if(window.innerWidth < 992){
            return toggle();
        }
    }
    return (
        <div className='wrap-category'>
            <ListGroup>
                <ListGroupItem className='category-title'>CATEGORY MENU
                    <FontAwesomeIcon className='menu-icon' icon={faBars}></FontAwesomeIcon>
                </ListGroupItem>
                <ListGroupItem className='category-item'>
                    <Link onClick={collapseEvent} className='category-link book' to='/'>Book 
                        <FontAwesomeIcon className='menu-icon right' icon={faChevronRight}></FontAwesomeIcon>
                        <FontAwesomeIcon className='menu-icon down' icon={faChevronDown}></FontAwesomeIcon>
                        <Collapse className='category-collapse-book' isOpen={isOpen}>
                            <div className='category-menu'>
                                {
                                    menuBook.map((i,index)=>{
                                        return (
                                            <SubCategory
                                                key={index}
                                                title={i.listName}
                                                content={i.books}
                                            ></SubCategory>
                                        )
                                    })
                                }
                            </div>
                        </Collapse>
                    </Link>
                    
                </ListGroupItem>
                <ListGroupItem className='category-item'>
                    <Link className='category-link' to='/'>Usedbooks</Link>
                </ListGroupItem>
                <ListGroupItem className='category-item'>
                    <Link className='category-link' to='/'>Sales Off</Link>
                </ListGroupItem>
                <ListGroupItem className='category-item'>
                    <Link className='category-link' to='/'>Cookbooks</Link>
                </ListGroupItem>
                <ListGroupItem className='category-item'>
                    <Link className='category-link' to='/'>Education</Link>
                </ListGroupItem>
                <ListGroupItem className='category-item'>
                    <Link className='category-link' to='/'>Biographies</Link>
                </ListGroupItem>
            </ListGroup>
        </div>
    )
}

export default Category;