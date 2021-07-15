import React from 'react'
/*import s from './Profile.module.scss'*/
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({posts, newPostText, dispatch}) => {
    return (
        <div >
            <ProfileInfo/>
            <MyPostsContainer
                posts={posts}
                newPostText={newPostText}
                dispatch={dispatch}
            />
        </div>
    )
}

export default Profile