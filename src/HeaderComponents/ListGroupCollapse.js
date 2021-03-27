
//Using collapse component inside of a loop
import React from 'react';
import { ListGroupItem, Collapse } from 'reactstrap';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import { faMinus} from '@fortawesome/free-solid-svg-icons';
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
    const {itemMenu , isOpend} = this.props;
    return (
      <ListGroupItem className="nav-group-item">
        <li onClick={this.toggle} className="wrap-sub-nav">
        <p>{itemMenu.nameMenu}
            {isOpend === false && <FontAwesomeIcon className="sub-icon-plus" icon={faPlus}/>}
            {isOpend === true && <FontAwesomeIcon className="sub-icon-plus" icon={faMinus}/>}
            </p>
            <Collapse  isOpen={isOpend}>
                <ul className="sub-nav-ul multiple-ul">
                {
                    itemMenu.arrMenu.map((i,index) => {
                        return (
                            <li key = {index} className="sub-nav-li">
                                <Link className="sub-nav-li-link" to="/">{i}</Link>
                            </li>
                        )
                    })
                }
                </ul>
            </Collapse>
        </li>
      </ListGroupItem>
    );
  }
}

export default ListGroupCollapse