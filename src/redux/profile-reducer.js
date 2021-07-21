const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const CHANGE_LIKES_COUNT = 'CHANGE-LIKES-COUNT'

let initialState = {
    posts: [
    {id: 1, text: 'hi', likesCount: 11},
    {id: 2, text: 'first post', likesCount: 1},
],
    newPostText: 'hi'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.length + 1,
                text: state.newPostText,
                likesCount: 0
            }
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
        }
        case CHANGE_LIKES_COUNT:
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.forEach((post) => {
                if (post.id === action.id){
                    stateCopy.posts[post.id-1].likesCount++
                }
            })
            return stateCopy
        default:
            return state
    }

}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export const changeLikesCountActionCreator = (id) => {
    return {
        type: CHANGE_LIKES_COUNT,
        id: id
    }
}

export default profileReducer