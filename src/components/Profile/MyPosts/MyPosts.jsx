import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    let posts = [
        {id: 1, text: 'hi', likesCount: 11}, {id: 2, text: 'first post', likesCount: 1},
    ]
    const likesCountIncrease = (id) => {
        console.log(id);
        posts.forEach((post)=>{
            if (post.id === id){
                post.likesCount++
                console.log(post);
            }
        })
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea name="" id="" cols="30" rows="2"/>
                <button>Add Post</button>
            </div>

            <div className={s.posts}>
                {posts.map((p) => <Post key={p.id} post={p} likesCountIncrease={likesCountIncrease}/>)}
            </div>
        </div>
    )
}

export default MyPosts