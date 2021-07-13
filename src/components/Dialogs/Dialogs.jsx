import s from './Dialogs.module.scss'
import React from 'react'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sentMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = ({dialogsData, messagesData, messageText, dispatch}) => {

    let newText = React.createRef()

    const textMessageChange = () => {
        let text = newText.current.value
        let action = updateMessageTextActionCreator(text)
        dispatch(action)
    }

    const sentMeesage = () => {
        let action = updateMessageTextActionCreator('')
        dispatch(sentMessageActionCreator())
        dispatch(action)
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