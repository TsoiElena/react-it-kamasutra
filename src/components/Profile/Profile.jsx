import React from 'react'
/*import s from './Profile.module.scss'*/
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({posts, newPostText, dispatch}) => {
    return (
        <div >
            <ProfileInfo/>
            <MyPosts
                posts={posts}
                newPostText={newPostText}
                dispatch={dispatch}
            />
        </div>
    )
}

export default Profile