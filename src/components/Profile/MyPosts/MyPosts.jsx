import React from 'react'
import s from './MyPosts.module.scss'
import Post from "./Post/Post";

const MyPosts = ({posts, addPost}) => {

    const likesCountIncrease = (id) => {
        console.log(id);
        posts.forEach((post)=>{
            if (post.id === id){
                post.likesCount++
                console.log(post);
            }
        })
    }

    let newPostText = React.createRef()

    const addNewPost = () => {
        debugger
        let text = newPostText.current.value
        addPost(text)
        newPostText.current.value = ''
    }



    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea name="" id="" cols="30" rows="2" ref={newPostText}/>
                <button onClick={addNewPost}>Add Post</button>
            </div>

            <div className={s.posts}>
                {posts.map((p) => <Post key={p.id} post={p} likesCountIncrease={likesCountIncrease}/>)}
            </div>
        </div>
    )
}

export default MyPosts