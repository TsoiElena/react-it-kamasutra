const SENT_MESSAGE = 'SENT-MESSAGE'
const UPDARE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

let initialState = {
    dialogsData: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Tima'},
        {id: 3, name: 'Rima'},
        {id: 4, name: 'Kira'},
        {id: 5, name: 'Lena'},
        {id: 6, name: 'Anna'},
        {id: 7, name: 'Mahsa'},
    ],
    messagesData: [
        {id: 1, text: 'Hi'},
        {id: 2, text: 'How r u'},
        {id: 3, text: 'fine'},
        {id: 4, text: 'yo'},
        {id: 5, text: 'yo'},
        {id: 6, text: 'yo'},
        {id: 7, text: 'yo'},
    ],
    messageText: 'hi'
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SENT_MESSAGE:
            return {
                ...state,
                messagesData: [
                    ...state.messagesData,
                    {
                        id: state.messagesData.length + 1,
                        text: state.messageText
                    }
                ],
                messageText: ''
            }

        case UPDARE_MESSAGE_TEXT:
            return {
                ...state,
                messageText: action.newText
            }

        default:
            return state
    }
}

export const messageSent = () => {
    return {
        type: SENT_MESSAGE
    }
}

export const updateNewMessageText = (text) => {
    return {
        type: UPDARE_MESSAGE_TEXT,
        newText: text
    }
}

export default dialogsReducer