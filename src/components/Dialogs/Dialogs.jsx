import s from './Dialogs.module.css'
import React from 'react'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return(
        <div className={s.dialog }>
            <NavLink to={"/dialogs/" + props.id} activeClassName={s.active}>{props.name}</NavLink>
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
    const dialogsData = [
        {id:1, name: 'Dima'},
        {id:2, name: 'Tima'},
        {id:3, name: 'Rima'},
        {id:4, name: 'Kira'},
        {id:5, name: 'Lena'},
        {id:6, name: 'Anna'},
        {id:7, name: 'Mahsa'},
    ]
    const messagesData = [
        {id:1, text: 'Hi'},
        {id:2, text: 'How r u'},
        {id:3, text: 'fine'},
        {id:4, text: 'yo'},
        {id:5, text: 'yo'},
        {id:6, text: 'yo'},
        {id:7, text: 'yo'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData.map((dialog) => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>)}

            </div>
            <div className={s.messages}>
                {messagesData.map((message) => <Message key={message.id} message={message.text}/>)}
            </div>
        </div>
    )

}

export default Dialogs