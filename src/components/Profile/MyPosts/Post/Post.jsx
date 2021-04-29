import React from 'react'
import s from './Post.module.css'

const Post = ({post, likesCountIncrease}) => {

    return (
        <div className={s.item}>
            <img src="https://i.pinimg.com/originals/47/fb/1e/47fb1ea7ff703c44534cb140f19894ae.jpg" alt=""/>
            <span>{post.text}</span>
            <div>
                <button onClick={() => likesCountIncrease(post.id)}>like</button>
                <span>{post.likesCount}</span>
            </div>
        </div>
    )
}

export default Post