import React from 'react'
/*import s from './Profile.module.scss'*/
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({posts, newPostText, addPost, postTextChange}) => {
    return (
        <div >
            <ProfileInfo/>
            <MyPosts
                posts={posts}
                addPost={addPost}
                newPostText={newPostText}
                postTextChange={postTextChange}
            />
        </div>
    )
}

export default Profile