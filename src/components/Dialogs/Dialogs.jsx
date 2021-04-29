import s from './Dialogs.module.css'
import React from 'react'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return(
        <div className={s.dialog }>
            <NavLink to={"/dialogs/1" + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="dima" id="1"/>
                <DialogItem name="tima" id="2"/>
                <DialogItem name="rima" id="3"/>
                <DialogItem name="kira" id="4"/>

            </div>
            <div className={s.messages}>
                <Message message='hi'/>
                <Message message='how are u'/>
                <Message message='fine'/>
            </div>
        </div>
    )

}

export default Dialogs