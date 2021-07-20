import React,{useState} from 'react';
import './subCategory.css';
import ListGroupCollapse from './ListGroupCollapse.js';

function SubCategory({title,content}) {
    const [collapse, setIsOpen] = useState({});

    const toggle = (id) => {
        if(window.innerWidth < 992){
            setIsOpen({collapse: collapse.collapse === id ? null : id} );
        }
      }
    
    return (
            <ListGroupCollapse
                id={title}
                itemMenu={content}
                isOpen = {collapse.collapse === title}
                toggle={toggle}
            ></ListGroupCollapse> 
    )
}


export default SubCategory;



