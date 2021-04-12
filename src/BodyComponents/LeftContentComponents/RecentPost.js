import React from 'react';
import PropTypes from 'prop-types';
import './RecentPost.css';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

function RecentPost({post}) {
    return (
        <div className='wrap-recent-post'>
            <div className='wrap-image-post'>
                <div>
                    <p className='post-day'>7</p>
                    <p className='post-month'>APR</p>
                </div>
                <img src={post.img}/>
            </div>
            <Link className='post-link mt-3'>
                <p className='post-title'>{post.title}</p>
            </Link>
            <p className='post-author'>{post.author}</p>
            <p className='post-content'>{post.content}</p>
        </div>
    )
}


export default RecentPost;

