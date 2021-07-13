import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, text: 'hi', likesCount: 11},
                {id: 2, text: 'first post', likesCount: 1},
            ],
            newPostText: 'hi',
        },
        messagesPage: {
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
        },
    },
    _callSubscriber() {},
    subscribe (observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },

    dispatch(action){
        this._state.profilePage = profileReducer( this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer( this._state.messagesPage, action)

        this._callSubscriber(this._state)
    },
}

export default store
window.store = store