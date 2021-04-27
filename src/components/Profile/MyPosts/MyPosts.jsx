import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
            <div>
                My posts
                <div>
                    <textarea name="" id="" cols="30" rows="2"/>
                    <button>Add Post</button>
                </div>
                <div className={s.posts}>
                    <Post message = 'hi' like = '2'/>
                    <Post message = 'first post' like = '4'/>
                </div>
            </div>
    )
}

export default MyPosts