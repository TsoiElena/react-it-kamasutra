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
        if (action.type === 'ADD-POST'){
            let newPost = {
                id: this._state.profilePage.posts.length + 1,
                text: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }

        if (action.type === 'SENT-MESSAGE') {
            let newMessage = {
                id: this._state.messagesPage.messagesData.length +1,
                text: this._state.messagesPage.messageText
            }
            this._state.messagesPage.messagesData.push(newMessage)
            this._callSubscriber(this._state)
        } else if ((action.type === 'UPDATE-MESSAGE-TEXT')) {
            this._state.messagesPage.messageText = action.newText
            this._callSubscriber(this._state)
        }
    },
}

export default store
window.store = store