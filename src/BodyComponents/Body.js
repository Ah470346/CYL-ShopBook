import React, {useEffect} from 'react';
import './Body.css';
import SlideShow from './IntroComponents/Slide.js';
import Policy from './IntroComponents/Policy.js';
import Category from './LeftContentComponents/Category.js';

function Body({menuBook}){
    return (
        <div className='body container'>  
            <div className='row intro'>
                <div className="col-lg-9 slide" >
                    <SlideShow></SlideShow>
                </div>
                <div className="col-lg-3 policy">
                    <Policy></Policy>
                </div>
            </div>
            <div className='row content'>
                <div className="col-lg-3 content-left" >
                    <Category menuBook={menuBook}></Category>
                </div>
                <div className="col-lg-9 content-right  order-lg-last order-first">
                </div>
            </div>
        </div>
    )
}

export default Body;