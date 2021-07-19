import React from 'react'
import {
    addPostActionCreator,
    changeLikesCountActionCreator,
    updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (/*{posts, dispatch, newPostText}*/) => {

    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState()
                const likesCountChange = (id) => {
                    let action = changeLikesCountActionCreator(id)
                    store.dispatch(action)
                }

                const addPost = () => {
                    store.dispatch(addPostActionCreator())
                    let action = updateNewPostTextActionCreator('')
                    store.dispatch(action)
                }

                let updateNewPostText = (text) => {
                    let action = updateNewPostTextActionCreator(text)
                    store.dispatch(action)
                }
                return (<MyPosts
                    updateNewPostText={updateNewPostText}
                    addPost={addPost}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
                    likesCountChange={likesCountChange}
                />)
            }
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer