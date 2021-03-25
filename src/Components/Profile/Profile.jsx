import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ps from './Profile.module.css';

const Profile = () => {
    return (
        <div className={ps.main}>
            <div className={ps.hat}></div>
            <div>
                <p>Аватара</p>
                <img className={ps.ava} src="https://miro.medium.com/max/1838/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt="avatar"></img>
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile