import {messageSent, updateNewMessageText} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import connect from "react-redux/lib/connect/connect";

let mapStateToProps = (state) => {
    return{
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
        messageText: state.messagesPage.messageText,
    }
}

const DialogsContainer = connect(mapStateToProps, {
    updateNewMessageText,
    messageSent,
}) (Dialogs)

export default DialogsContainer