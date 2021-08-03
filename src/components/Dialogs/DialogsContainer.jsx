import {messageSent, updateNewMessageText} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import connect from "react-redux/lib/connect/connect";
import React from "react";
import {withAuthRedirect} from "../HOC/AuthRedirect";


const DialogsContainer = ({dialogsData, messagesData, messageText, isAuth, updateNewMessageText, messageSent}) => {

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

let AuthRedirectComponent = withAuthRedirect(DialogsContainer)

let mapStateToProps = (state) => {
    return{
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
        messageText: state.messagesPage.messageText,
    }
}

export default connect(mapStateToProps, {
    updateNewMessageText,
    messageSent,
}) (AuthRedirectComponent)

