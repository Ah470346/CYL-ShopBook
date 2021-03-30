import React from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import './FavoriteBook.css';

function FavoriteBook({image,title}) {
    return (
        <div className="wrap-favorite-brand mt-md-0 mt-4">
            <Link className='link-favorite-book' to='/'>
                <img src={image}></img>
                <p>{title}</p>
            </Link>
        </div>
    )
}

export default FavoriteBook;

