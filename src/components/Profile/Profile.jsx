import React from 'react'
/*import s from './Profile.module.scss'*/
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({posts, addPost}) => {
    return (
        <div >
            <ProfileInfo/>
            <MyPosts posts={posts} addPost={addPost}/>
        </div>
    )
}

export default Profile