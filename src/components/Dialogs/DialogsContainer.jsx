import {messageSent, updateNewMessageText} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import connect from "react-redux/lib/connect/connect";
import React from "react";
import Redirect from "react-router-dom/es/Redirect";


const DialogsContainer = ({dialogsData, messagesData, messageText, isAuth, updateNewMessageText, messageSent}) => {

    if (!isAuth) return <Redirect to={'login'}/>

    return (
        <Dialogs
            dialogsData={dialogsData}
            messagesData={messagesData}
            messageText={messageText}
            updateNewMessageText={updateNewMessageText}
            messageSent={messageSent}
        />
    )
}

let mapStateToProps = (state) => {
    return{
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
        messageText: state.messagesPage.messageText,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {
    updateNewMessageText,
    messageSent,
}) (DialogsContainer)

