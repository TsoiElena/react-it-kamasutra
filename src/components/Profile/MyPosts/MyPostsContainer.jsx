import React from 'react'
import {
    addPostActionCreator,
    changeLikesCountActionCreator,
    updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import connect from "react-redux/lib/connect/connect";


/*const MyPostsContainer = (/!*{posts, dispatch, newPostText}*!/) => {

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
}*/

 let mapStateToProps = (state) => {
    return{
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
 }

let mapDispatchToProps = (dispatch) => {
    return{
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostActionCreator())
            let action = updateNewPostTextActionCreator('')
            dispatch(action)
        },
        likesCountChange: (id) => {
            let action = changeLikesCountActionCreator(id)
            dispatch(action)
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)
export default MyPostsContainer