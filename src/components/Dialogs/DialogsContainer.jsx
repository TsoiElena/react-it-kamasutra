import React from 'react'
import {sentMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = ({dialogsData, messagesData, messageText, dispatch}) => {

    const textMessageChange = (text) => {
        let action = updateMessageTextActionCreator(text)
        dispatch(action)
    }

    const sentMeesage = () => {
        let action = updateMessageTextActionCreator('')
        dispatch(sentMessageActionCreator())
        dispatch(action)
    }
    return (
        <Dialogs
            updateNewMessageText={textMessageChange}
            messageSent={sentMeesage}
            dialogsData={dialogsData}
            messagesData={messagesData}
            messageText={messageText}
        />
    )

}

export default DialogsContainer