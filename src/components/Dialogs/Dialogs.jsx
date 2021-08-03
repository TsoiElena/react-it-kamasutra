import s from './Dialogs.module.scss'
import React from 'react'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Redirect from "react-router-dom/es/Redirect";

const Dialogs = ({dialogsData, messagesData, messageText, updateNewMessageText, messageSent}) => {

    let newText = React.createRef()

    const textMessageChange = () => {
        let text = newText.current.value
        updateNewMessageText(text)
    }

    const sentMeesage = () => {
        messageSent()
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData.map((dialog) => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>)}

            </div>
            <div className={s.messages}>
                {messagesData.map((message) => <Message key={message.id} message={message.text}/>)}
                <div>
                    <textarea cols="30" rows="10" ref={newText} onChange={textMessageChange} value={messageText}/>
                    <button onClick={sentMeesage}>sent</button>
                </div>
            </div>
        </div>
    )

}

export default Dialogs