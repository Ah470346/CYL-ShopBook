import React, {useEffect} from 'react';
import './Body.css';
import SlideShow from './IntroComponents/Slide.js';
import Policy from './IntroComponents/Policy.js';
import Category from './LeftContentComponents/Category.js';
import FavoriteBook from './RightContentComponents/FavoriteBook.js';
import book1 from '../images/bookFavorite1.jpg';
import book2 from '../images/bookFavorite2.jpg';
import ContentCarousel from './RightContentComponents/CarouselContentComponents/ContentCarousel.js';
import RecentPost from './LeftContentComponents/RecentPost.js';
import LittleCarousel from './LittleCarousel/LittleCarousel';

function Body({menuBook,slideBooks}){
    const recentPost = {
        img: "//cdn.shopify.com/s/files/1/0066/5550/8549/articles/11_255x150.jpg?v=1540387885",
        title: "The Standard Chunk Of Lorem Ipsum Used Since",
        author: "cylBook admin",
        content:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making..."
    }
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
                <div className="col-md-4 col-lg-3 content-left" >
                    <Category menuBook={menuBook}></Category>
                    <div className='comics-book'>
                        <img src='//cdn.shopify.com/s/files/1/0066/5550/8549/files/31.jpg?v=1570444717'></img>
                    </div>
                    <div className='recent-post mt-5'>
                        <p className="left-title">RECENT POST</p>
                        <RecentPost post={recentPost}></RecentPost>
                    </div>
                    <div className="trending mt-5">
                        <p className="left-title">TRENDING PRODUCTS</p>
                        <LittleCarousel number={2} slideBooks={[...slideBooks]}></LittleCarousel>
                    </div>
                </div>
                <div className="col-md-8 col-lg-9 content-right  order-md-last order-first">
                    <div className='row favorite-books'>
                        <div className='col-md-7 favorite-books-brand left'>
                            <FavoriteBook image={book1} title={'True Crime to Blow Your Mind'}></FavoriteBook>
                        </div>
                        <div className='col-md-5 favorite-books-brand right'>
                            <FavoriteBook image={book2} title={"Celebrate Indigenous Peoples' Day"}></FavoriteBook>
                        </div>
                    </div>
                    <div className='content-carousel mt-4'>
                        <ContentCarousel slideBooks={[...slideBooks]}></ContentCarousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;