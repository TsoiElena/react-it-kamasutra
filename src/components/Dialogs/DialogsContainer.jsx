import React from 'react'
import {sentMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import connect from "react-redux/lib/connect/connect";

let mapStateToProps = (state) => {
    return{
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
        messageText: state.messagesPage.messageText,
    }
}

let mapDispatchToProps = () => {
    return{
        updateNewMessageText: (text) => {
            let action = updateMessageTextActionCreator(text)
            store.dispatch(action)
        },
        messageSent: (dispatch) => {
            let action = updateMessageTextActionCreator('')
            dispatch(sentMessageActionCreator())
            dispatch(action)
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)

export default DialogsContainer