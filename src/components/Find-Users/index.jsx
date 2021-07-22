import React, {useEffect} from 'react'
import style from './style.module.scss';
import userPhoto from '../../assets/images/UserImg.png'
import api from "../../api";


const Users = ({users, follow, unfollow, setUsers}) => {
    useEffect(() => {
        api.get('users').then(res => {
            setUsers(res.data.items)
        })
    }, [])
    return (
        <div>
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
