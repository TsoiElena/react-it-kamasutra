import s from './Dialogs.module.scss'
import React from 'react'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({dialogsData, messagesData}) => {

    let newMessageText = React.createRef()

    const sentMeesage = () => {
        let text = newMessageText.current.value
        alert(text)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData.map((dialog) => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>)}

            </div>
            <div className={s.messages}>
                {messagesData.map((message) => <Message key={message.id} message={message.text}/>)}
                <div>
                    <textarea cols="30" rows="10" ref={newMessageText} />
                    <button onClick={sentMeesage}>sent</button>
                </div>
            </div>
        </div>
    )

}

export default Dialogs