import React from 'react';
import './Book.css';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';
import {ReactComponent as Cart} from '../../../images/productCart.svg';
import  {ReactComponent as Detail} from '../../../images/detail.svg'


function Book({book}) {
    let price = '', priceSale;
    const index = book.productDetail.price.indexOf(",");
    if(index !== -1){
        price = book.productDetail.price.slice(1,index);
        priceSale = book.productDetail.price.slice(index+2,book.productDetail.price.length);
    }
    let sale = 100-(priceSale/price * 100 );
    let name
    if(book.name.length > 45 ){
        name= book.name.slice(0,45) + '...';
    } else {
        name = book.name;
    }
    
    return (
        <div className='wrap-product'>
            <div className='product-image'>
                <div className='quick-view-product'></div>
                <div className='flex-search'>
                    <div className='wrap-search'>
                        <FontAwesomeIcon icon={faSearchPlus}></FontAwesomeIcon>
                    </div>
                </div>
                <img src={book.image}></img>
                {
                    book.productDetail.price.includes(',') === true &&
                    (
                        <div className='product-sale'>
                            <div className='sale'>NEW</div>
                            <div className='percent-sale'>- {Math.round(sale)}%</div>
                        </div> 
                    )
                }
            </div>
            <div className='product-detail'>
                <div className='product-rate'>
                    <Rating className='product-rating'
                        emptySymbol={<svg style={{marginRight: '5px'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00abe0" className="bi bi-star" viewBox="0 0 16 16">
                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                    </svg>}
                        fullSymbol={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00abe0" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>}
                    ></Rating>
                </div>
                <div className='product-title'>
                    <Link className='product-link' to='/'><p>{name}</p></Link>
                </div>
                <div className='product-price'>
                    {
                        price !== '' && (<div className='wrap-price'><p className='price'>${price}</p>
                        <p className='price-sale'>${priceSale}</p></div>)
                    }
                    {
                        price === '' && (<div className='wrap-price'><p className='price'>{book.productDetail.price}</p></div>)
                    }
                </div>
                <div className="product-cart">
                    <div className="product-cart-add">
                        <Cart />
                        <span className="ml-2">Add to cart</span>
                    </div>
                    <Link><Detail /></Link>
                </div>
            </div>
        </div>
    )
}

export default Book;

