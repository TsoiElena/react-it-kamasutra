import React from 'react'
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.profile}>
            <div>
                <img className={s.previmg} src="https://www.ejin.ru/wp-content/uploads/2017/09/18-728.jpg" alt = "?" />
            </div>
            <div>
                AVA + DESCRIP
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile