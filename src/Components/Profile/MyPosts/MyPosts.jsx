import React from 'react';
import ps from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <>
            <div className={ps.mypost}>Мой пост</div>
            <div>
                <textarea placeholder="Enter your message here..." className={ps.textpost}></textarea><br />
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={ps.posts}>Новые посты:
                <Post />
            </div>
        </>
        
    )
}

export default MyPosts