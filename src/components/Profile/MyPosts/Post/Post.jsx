import React from 'react'
import s from './Post.module.scss'
import profoto from '../../../../assets/images/UserImg.png'
import likeIcon from '../../../../assets/images/icons8-сердце-100.png'

const Post = ({post, likesCountIncrease}) => {

    return (
        <div className={s.item}>
            <div className={s.post}>
                <img src={profoto} alt=""/>
                <span>{post.text}</span>
            </div>
            <div>
                <button onClick={() => likesCountIncrease(post.id)}>
                    <img className={s.heart} src={likeIcon} alt=""/>
                    {post.likesCount}
                </button>
            </div>
        </div>
    )
}

export default Post
