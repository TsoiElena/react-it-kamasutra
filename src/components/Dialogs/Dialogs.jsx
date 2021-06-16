import s from './Dialogs.module.scss'
import React from 'react'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({dialogsData, messagesData}) => {

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