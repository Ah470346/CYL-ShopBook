import React from 'react';
import './LittleCarousel.css';
import Carousel from "react-multi-carousel";
import UAParser from "ua-parser-js";
import {Link} from "react-router-dom";

function LittleCarousel({slideBooks,number}) {
    const parser = new UAParser();
    const result = parser.getResult();
    const deviceType = (result.device && result.device.type) || "desktop";
    const listSend = slideBooks.filter((i)=>{
        return i.length <=  10 ; 
    });
    const renderCarousel = (list) =>{
        const arr = [];
        for(let i = 0 ; i < list.length ; i += 3){
            const subArray = [list[i],list[i+1],list[i+2]];
            arr.push(subArray.filter( i => i !== undefined));
        }
        return arr;
    }
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
          items: 1,
        },
        tablet: {
          breakpoint: { max: 1024, min: 768 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 768, min: 0 },
          items: 1
        }
    };
    return (
        <div className="wrap-trending">
            <Carousel responsive={responsive} 
                {...getConfigSlide()} 
                // autoPlay={true}
                customLeftArrow={<button className="btn-previous"></button>}
                customRightArrow={<button className="btn-next"></button>}
                deviceType={deviceType}
                >
                    {
                        listSend.length !== 0 && renderCarousel(listSend[number].listBooks).map((i,num)=>{
                            const array = [];
                            for(let j = 0 ; j < i.length; j++){
                                let price = '', priceSale;
                                const index = i[j].productDetail.price.indexOf(",");
                                if(index !== -1){
                                    price = i[j].productDetail.price.slice(1,index);
                                    priceSale = i[j].productDetail.price.slice(index+2,i[j].productDetail.price.length);
                                }
                                let name;
                                if(i[j].name.length > 15 ){
                                    name= i[j].name.slice(0,15) + '...';
                                } else {
                                    name = i[j].name;
                                }
                                array.push(<Book image={i[j].image} name={name} 
                                                price1={i[j].productDetail.price}
                                                price2={price} priceSale={priceSale}></Book>)
                            }
                            return (
                                <div className="book-item" key={num}>
                                    {[...array]}
                                </div>
                            )
                        })
                    }
            </Carousel>
        </div>
    )
}

const Book = ({image,name,price1,price2,priceSale}) => {
    return (
        <div className="wrap-item">
            <div className="product-image">
                <img src={image} alt="" />
            </div>
            <div className="wrap-info">
                <div className='product-title'>
                    <Link className='product-link' to='/'><p>{name}</p></Link>
                </div>
                <div className='product-price'>
                    {
                        price2 !== '' && (<div className='wrap-price'><p className='price'>${price2}</p>
                        <p className='price-sale'>${priceSale}</p></div>)
                    }
                    {
                        price2 === '' && (<div className='wrap-price'><p className='price'>{price1}</p></div>)
                    }
                </div>
            </div>
            
        </div>
    )
}

export default LittleCarousel;



