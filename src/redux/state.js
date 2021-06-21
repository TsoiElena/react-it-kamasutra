import {rerenderTree} from "../render";

let state = {
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
}

export const postTextChange = (newText) => {
    state.profilePage.newPostText = newText
    rerenderTree(state)
}

export const addPost = () => {
    let newPost = {
        id: 5,
        text: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderTree(state)
}

export const messageTextChange = (newText) => {
    state.messagesPage.messageText = newText
    rerenderTree(state)
}

export const sentMessage = () => {
    let newMessage = {
        id: 8,
        text: state.messagesPage.messageText
    }
    state.messagesPage.messagesData.push(newMessage)
    rerenderTree(state)
}

export default state