import React from 'react'
import s from './MyPosts.module.scss'
import Post from "./Post/Post";

const MyPosts = ({posts, newPostText, updateNewPostText, addPost, likesCountChange}) => {
    let newText = React.createRef()

    const likesCountIncrease = (id) => {
        likesCountChange(id)
    }

    const addNewPost = () => {
        addPost()
    }

    let onChangePost = () => {
        let text = newText.current.value
        updateNewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div className={s.addPostBlock}>
                <textarea
                    name=""
                    id=""
                    cols="50"
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
