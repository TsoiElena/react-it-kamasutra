import React from 'react'
import {
    addPostActionCreator,
    changeLikesCountActionCreator,
    updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = ({posts, dispatch, newPostText}) => {
    const likesCountChange = (id) => {
        let action = changeLikesCountActionCreator(id)
        dispatch(action)
    }

    const addPost = () => {
        dispatch(addPostActionCreator())
        let action = updateNewPostTextActionCreator('')
        dispatch(action)
    }

    let updateNewPostText = (text) => {
        let action = updateNewPostTextActionCreator(text)
        dispatch(action)
    }

    return (
        <MyPosts updateNewPostText={updateNewPostText} addPost = {addPost} posts={posts} newPostText={newPostText} likesCountChange={likesCountChange}/>
    )
}

export default MyPostsContainer