const SENT_MESSAGE = 'SENT-MESSAGE'
const UPDARE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

const dialogsReducer = (state, action) => {
    switch (action.type){
        case SENT_MESSAGE:
            let newMessage = {
                id: state.messagesData.length +1,
                text: state.messageText
            }
            state.messagesData.push(newMessage)
            return state

        case UPDARE_MESSAGE_TEXT:
            state.messageText = action.newText
            return state

        default:
            return state
    }
}

export const sentMessageActionCreator = () => {
    return {
        type: SENT_MESSAGE
    }
}

export const updateMessageTextActionCreator = (text) => {
    return {
        type: UPDARE_MESSAGE_TEXT,
        newText: text
    }
}

export default dialogsReducer