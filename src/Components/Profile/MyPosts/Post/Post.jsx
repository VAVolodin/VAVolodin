import React from 'react';
import ps from './Post.module.css';

const Post = (props) => {
    return (
        <>
            <div className={ps.item}>
                <img src="https://i.pinimg.com/originals/0a/42/7f/0a427f8c57082a1d1f0da6538acabf32.jpg" alt="postava"></img>
                <span>{props.message}</span>
            </div>
        </>        
    )
}

export default Post