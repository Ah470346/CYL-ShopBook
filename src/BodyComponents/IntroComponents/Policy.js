import React from 'react';
import './Policy.css';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck }from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt }from '@fortawesome/free-solid-svg-icons';
import { faWallet }from '@fortawesome/free-solid-svg-icons';

function Policy (){
    return (
        <div className="row contain-policy">
            <div className='col-lg-12 col-md-6 mt-lg-0 mt-md-3 mt-3'>
                <div className="policy-best-sale">
                    <Link to='/'>
                        <img src="//cdn.shopify.com/s/files/1/0066/5550/8549/files/20.jpg?v=1570354917"/>
                    </Link>
                </div>
            </div>
            <div className='col-lg-12 col-md-6 '>
                <div className="policy-content">
                    <FontAwesomeIcon className='policy-icon a mr-3' icon={faTruck}></FontAwesomeIcon>
                    <p>Free shipping item For all orders over $100</p>
                </div>
                <div className="policy-content">
                    <FontAwesomeIcon className='policy-icon b mr-3' icon={faCalendarAlt}></FontAwesomeIcon>
                    <p>Money back guarante 100% money back guarante</p>
                </div>
                <div className="policy-content">
                    <FontAwesomeIcon className='policy-icon c mr-3' icon={faWallet}></FontAwesomeIcon>
                    <p>Cash on delivery Lorem ipsum dolor amet</p>
                </div>
            </div>
        </div>
    )
}

export default Policy;