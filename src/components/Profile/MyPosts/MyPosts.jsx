import React from 'react'
import s from './MyPosts.module.scss'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = ({posts, dispatch, newPostText}) => {
    let newText = React.createRef()

    const likesCountIncrease = (id) => {
        console.log(id);
        posts.forEach((post)=>{
            if (post.id === id){
                post.likesCount++
                console.log(post);
            }
        })
    }

    const addNewPost = () => {
        dispatch(addPostActionCreator())
        let action = updateNewPostTextActionCreator('')
        dispatch(action)
    }

    let onChangePost = () => {
        let text = newText.current.value
        let action = updateNewPostTextActionCreator(text)
        dispatch(action)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="2"
                    ref={newText}
                    onChange={onChangePost}
                    value={newPostText}
                />
                <button onClick={addNewPost}>Add Post</button>
            </div>

            <div className={s.posts}>
                {posts.map((p) => <Post key={p.id} post={p} likesCountIncrease={likesCountIncrease}/>)}
            </div>
        </div>
    )
}

export default MyPosts