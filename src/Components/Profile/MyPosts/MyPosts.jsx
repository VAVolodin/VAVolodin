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
                <Post message="Hey, how're you?" />
                <Post message="Thanks, I'm fine! =)" />
            </div>
        </>
        
    )
}

export default MyPosts