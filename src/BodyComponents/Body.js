import React, {useEffect} from 'react';
import './Body.css';
import SlideShow from './IntroComponents/Slide.js';
import Policy from './IntroComponents/Policy.js';
import Category from './LeftContentComponents/Category.js';
import FavoriteBook from './RightContentComponents/FavoriteBook.js';
import book1 from '../images/bookFavorite1.jpg';
import book2 from '../images/bookFavorite2.jpg';
import book3 from '../images/book1.jpg';

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
                    <div className='row favorite-books'>
                        <div className='col-md-7 favorite-books-brand left'>
                            <FavoriteBook image={book1} title={'True Crime to Blow Your Mind'}></FavoriteBook>
                        </div>
                        <div className='col-md-5 favorite-books-brand right'>
                            <FavoriteBook image={book2} title={"Celebrate Indigenous Peoples' Day"}></FavoriteBook>
                        </div>
                    </div>
                    <div className='row slideShow'>
                        <div className='col-md-12'>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;