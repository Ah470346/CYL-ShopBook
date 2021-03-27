import React ,{useRef,useState,useEffect} from 'react';
import { Slide } from 'react-slideshow-image';
import './Slide.css';
import {
    Button
  } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight} from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';





function SlideShow (){
    const h4El = useRef(null);
    const h1El = useRef(null);
    const buttonEl = useRef(null);
    const properties = {
        autoplay: true,
        indicators: false,
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        prevArrow: <div className="wrap-prevArrow" style={{width: "30px", marginRight: "-30px"}}><FontAwesomeIcon className="prevArrow" icon={faAngleLeft} ></FontAwesomeIcon></div>,
        nextArrow: <div className="wrap-nextArrow" style={{width: "30px", marginLeft: "-30px"}}><FontAwesomeIcon className="nextArrow" icon={faAngleRight} ></FontAwesomeIcon></div>,
        onChange: (pre,next) =>{
            
        }
    };
    return (
        <div >
        <Slide easing="ease" {...properties}>
          <div  className="each-slide">
            <div className="contain-slide" style={{'backgroundImage': `url(//cdn.shopify.com/s/files/1/0066/5550/8549/files/7_37e2829d-a08f-42dd-9d46-4cb59b4476db.jpg?v=1570354530)`}}>
                <div className="wrap-intro-infor">
                    <h4 ref={h4El}>Sale up to 30% off</h4>
                    <h1 ref={h1El}>Books in Store</h1>
                    <Button color="primary" ref={buttonEl}>SHOPPING NOW!</Button>
                </div>
            </div>
          </div>
          <div className="each-slide">
            <div className="contain-slide" style={{'backgroundImage': `url(//cdn.shopify.com/s/files/1/0066/5550/8549/files/8_1fd6b86e-264c-41ed-b81e-5bffc3de2191.jpg?v=1570354547)`}}>
                <div className="wrap-intro-infor">
                    <h4 ref={h4El}>Hot books and New books</h4>
                    <h1 ref={h1El}>Books in Store</h1>
                    <Button color="primary" ref={buttonEl}>SHOPPING NOW!</Button>
                </div>
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default SlideShow;