import React from 'react'
/*import s from './Profile.module.scss'*/
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Redirect from "react-router-dom/es/Redirect";

const Profile = ({posts, newPostText, dispatch, profile}) => {

    return (
        <div >
            <ProfileInfo profile={profile}/>
            <MyPostsContainer
                posts={posts}
                newPostText={newPostText}
                dispatch={dispatch}
            />
        </div>
    )
}

export default Profile