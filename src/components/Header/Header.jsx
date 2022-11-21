import React from 'react'
import s from './Header.module.scss'
import {NavLink} from "react-router-dom";
import icon from '../../assets/images/icons8-react-100 (2).png'

const Header = ({isAuth, login}) => {
    return (
        <header className={s.header}>
            <img src={icon} alt="?"/>
            <div className={s.loginBlock}>
                {isAuth? <div className={s.userName}>{login}</div> : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header
