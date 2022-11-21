import style from './style.module.scss'
import userPhoto from '../../assets/images/UserImg.png'
import {NavLink} from 'react-router-dom'

const Users = ({users, follow, unfollow, onPageChanged, currentPage, totalUsersCount, pageSize, following}) => {
    let pagesCount = Math.ceil(totalUsersCount/pageSize)

    return (
        <div>
            <div className={style.pagination}>
                <button className={currentPage === 1 ? style.pactive : style.page} onClick={() => {
                    onPageChanged(1)
                }}>1</button>
                {currentPage < 3 ? (
                    <>
                        <button className={currentPage === 2 ? style.pactive : style.page} onClick={() => {
                            onPageChanged(2)
                        }}>2</button>
                        <button className={currentPage === 3 ? style.pactive : style.page} onClick={() => {
                            onPageChanged(3)
                        }}>3</button>
                        <button disabled>...</button>
                    </>
                ) : null}
                {currentPage > 2 && currentPage < pagesCount-1 ? (
                    <>
                        <button disabled>...</button>
                        <button className={style.page} onClick={() => {
                            onPageChanged(currentPage-1)
                        }}>{currentPage-1}</button>
                        <button className={style.pactive} onClick={() => {
                            onPageChanged(currentPage)
                        }}>{currentPage}</button>
                        <button className={style.page} onClick={() => {
                            onPageChanged(currentPage+1)
                        }}>{currentPage+1}</button>
                        <button disabled>...</button>
                    </>
                ) : null}
                {currentPage > pagesCount-2 ? (
                    <>
                        <button disabled>...</button>
                        <button className={currentPage === pagesCount-2 ? style.pactive : style.page} onClick={() => {
                            onPageChanged(pagesCount-2)
                        }}>{pagesCount-2}</button>
                        <button className={currentPage === pagesCount-1 ? style.pactive : style.page} onClick={() => {
                            onPageChanged(pagesCount-1)
                        }}>{pagesCount-1}</button>
                    </>
                ) : null}
                <button className={currentPage === pagesCount ? style.pactive : style.page} onClick={() => {
                    onPageChanged(pagesCount)
                }}>{pagesCount}</button>
            </div>
            {
                users.map(user => (<div key={user.id} className={style.item}>
                        <div className={style.avatar}>
                            <div>
                                <NavLink to={`/profile/${user.id}`}>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto} alt=""
                                     className={style.userPhoto}/>
                                </NavLink>
                            </div>
                            <div>
                                {user.followed
                                    ? <button disabled={following.some(id => id === user.id)} onClick={() => {
                                        unfollow(user.id)
                                    }}>unfollow</button>
                                    : <button disabled={following.some(id => id === user.id)} onClick={() => {
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
