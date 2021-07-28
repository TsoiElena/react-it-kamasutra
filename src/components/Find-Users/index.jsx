import React from "react"
import style from "./style.module.scss";
import userPhoto from "../../assets/images/UserImg.png";

const Users = ({users, follow, unfollow, onPageChanged, currentPage, totalUsersCount, pageSize}) => {
    let pagesCount = Math.ceil(totalUsersCount/pageSize)
    let pages = []

    for(let i=1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(page => (<button className={currentPage === page ? style.active : ''} onClick={() => {
                    onPageChanged(page)
                }}>{page}</button>))}
            </div>
            {
                users.map(user => (<div key={user.id} className={style.item}>
                        <div className={style.avatar}>
                            <div>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto} alt=""
                                     className={style.userPhoto}/>
                            </div>
                            <div>
                                {user.followed
                                    ? <button onClick={() => {
                                        unfollow(user.id)
                                    }}>unfollow</button>
                                    : <button onClick={() => {
                                        follow(user.id)
                                    }}>follow</button>}
                            </div>
                        </div>
                        <div className={style.info}>
                            <div className={style.mainInfo}>
                                <div className={style.name}>{user.name}</div>
                                <div>{user.status}</div>
                            </div>
                            <div>
                                <div>{/*{user.location.city}*/}Moscow,</div>
                                <div className={style.country}>{/*{user.location.country}*/}Russia</div>
                            </div>
                        </div>
                    </div>)
                )
            }

        </div>
    )
}

export default Users