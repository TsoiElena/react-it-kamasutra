import React from 'react'
/*import s from './Profile.module.scss'*/
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({posts}) => {
    return (
        <div >
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    )
}

export default Profile