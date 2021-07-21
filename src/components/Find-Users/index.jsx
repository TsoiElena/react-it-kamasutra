import React from "react"
import style from './style.module.scss';

const Users = ({users, follow, unfollow, setUsers}) => {

    if(users.length === 0) {
        setUsers([
            {
                id: 1,
                photoUrl: 'https://i.ytimg.com/vi/-rkWyaiS4_8/hqdefault.jpg',
                followed: false,
                fullname: 'Dima',
                status: 'hi i am new here',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 2,
                photoUrl: 'https://i.ytimg.com/vi/-rkWyaiS4_8/hqdefault.jpg',
                followed: true,
                fullname: 'Tima',
                status: 'hi i am new here',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://i.ytimg.com/vi/-rkWyaiS4_8/hqdefault.jpg',
                followed: true,
                fullname: 'Rima',
                status: 'hi i am new here',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 4,
                photoUrl: 'https://i.ytimg.com/vi/-rkWyaiS4_8/hqdefault.jpg',
                followed: false,
                fullname: 'Kira',
                status: 'hi i am new here',
                location: {city: 'Moscow', country: 'Russia'}
            },
        ])
    }

    return (
        <div>
            {
                users.map(user => (<div key={user.id} className={style.item}>
                        <div className={style.avatar}>
                            <div>
                                <img src={user.photoUrl} alt="" className={style.userPhoto}/>
                            </div>
                            <div>
                                {user.followed
                                    ? <button onClick={(e) => {
                                        unfollow(user.id)
                                    }}>unfollow</button>
                                    : <button onClick={(e) => {
                                        follow(user.id)
                                    }}>follow</button>}
                            </div>
                        </div>
                        <div className={style.info}>
                            <div className={style.mainInfo}>
                                <div className={style.name}>{user.fullname}</div>
                                <div>{user.status}</div>
                            </div>
                            <div className={style.locationInfo}>
                                <div>{user.location.city},</div>
                                <div className={style.country}>{user.location.country}</div>
                            </div>
                        </div>
                    </div>)
                )
            }
        </div>

    )
}

export default Users
