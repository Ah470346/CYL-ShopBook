import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book.js';
import './CarouselBooks.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import UAParser from "ua-parser-js";


function CarouselBooks({slideBook}) {
    const parser = new UAParser();
    const result = parser.getResult();
    const deviceType = (result.device && result.device.type) || "desktop";
    const getConfigSlide = ()=>({
        swipeable:true,
        draggable:true,
        showDots:false,
        arrows:true,
        // autoPlay:false,
        ssr:true, // means to render carousel on server-side.
        infinite:true,
        autoPlaySpeed:3000,
        keyBoardControl:true,
        transitionDuration:500,
        containerClass:"carousel-container",
        dotListClass:"custom-dot-list-style",
        itemClass:"carousel-item-padding-40-px"
    })
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 768 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 768, min: 0 },
          items: 1
        }
    };
    return (
        <div className='wrap-slide-book'>
            <div className='book-title'>
                {
                    slideBook !== undefined && <p className="title">{slideBook.listName}</p>
                }
            </div>
            <Carousel responsive={responsive} 
                {...getConfigSlide()} 
                autoPlay={deviceType !== "mobile" ? true : false}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={deviceType}
                >
                    {
                        slideBook !== undefined && slideBook.listBooks.map((i,index)=>{
                        return (
                            <Book
                                key={index}
                                book={i}
                            >
                            </Book>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}


export default CarouselBooks;

