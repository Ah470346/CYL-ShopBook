import React from 'react';
import PropTypes from 'prop-types';
import CarouselBooks from './CarouselBooks.js';
import './ContentCarousel.css';

function ContentCarousel({slideBooks}) {
    const listSend = slideBooks.filter((i)=>{
        return i.length <=  10 ; 
    });
    return (
        <div className='wrap-content-carousel'>
            <CarouselBooks slideBook={listSend[0]}></CarouselBooks>
            <hr></hr>
            <CarouselBooks slideBook={listSend[4]}></CarouselBooks>
            <hr></hr>
            <CarouselBooks slideBook={listSend[2]}></CarouselBooks>
        </div>
    )
}

export default ContentCarousel;

