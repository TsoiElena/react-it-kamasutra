import style from './style.module.scss';
import userPhoto from '../../assets/images/UserImg.png'
import * as axios from 'axios';
import React from "react";


class Users extends React.Component {
    getUsers = () => {
        if (this.props.users.length ===0) {
        axios.get('users').then(res => {
            this.props.setUsers(res.data.items)
        })
        }
    }

    render() {
       return( <div>
               <button onClick={this.getUsers}>get users</button>
            {
                this.props.users.map(user => (<div key={user.id} className={style.item}>
                        <div className={style.avatar}>
                            <div>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto} alt=""
                                     className={style.userPhoto}/>
                            </div>
                            <div>
                                {user.followed
                                    ? <button onClick={() => {
                                        this.props.unfollow(user.id)
                                    }}>unfollow</button>
                                    : <button onClick={() => {
                                        this.props.follow(user.id)
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
    }}

export default Users
