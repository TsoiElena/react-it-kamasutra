import s from './Dialogs.module.css'
import React from 'react'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog }>
                    <NavLink to="/dialogs/1" activeClassName={s.active}>dima</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2" activeClassName={s.active}>tima</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3" activeClassName={s.active}>rima</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    hi
                </div>
                <div className={s.message}>
                    how're you
                </div>
            </div>
        </div>
    )

}

export default Dialogs