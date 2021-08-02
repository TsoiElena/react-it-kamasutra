import React from 'react'
import s from './Header.module.scss'
import {NavLink} from "react-router-dom";

const Header = ({isAuth, login}) => {
    return (
        <header className={s.header}>
            <img src='https://img2.freepng.ru/20180509/gvw/kisspng-globe-earth-clip-art-5af366a46f1587.271956161525900964455.jpg' alt="?"/>
            <div className={s.loginBlock}>
                {isAuth? <div className={s.userName}>{login}</div> : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header