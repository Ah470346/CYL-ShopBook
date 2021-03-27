//Using collapse component inside of a loop
import React from 'react';
import { ListGroupItem, Collapse } from 'reactstrap';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import { faChevronDown} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ListGroupCollapse extends React.Component {
  constructor(props) {
    super(props);
    
    this.toggle = this.toggle.bind(this);
  }
  
  toggle(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.toggle(this.props.id);
  }
  render() {
    const {id,itemMenu , isOpen} = this.props;
    return (
      <ListGroupItem className="nav-group-item">
        <ul className='sub-menu-category'>
            <Link  onClick={this.toggle} className='sub-menu-title' to='/'>{id}
                <FontAwesomeIcon className="sub-icon-down" icon={faChevronDown}/>
            </Link>
            <Collapse  isOpen={isOpen}>
                {
                    itemMenu.map((i,index) => {
                        return (
                            <li
                            className='sub-category-item'
                            key={index} 
                            ><Link className='sub-link-category' to='/'>{i}</Link></li>
                        )
                    })
                }
            </Collapse>
        </ul>
      </ListGroupItem>
    );
  }
}

export default ListGroupCollapse;