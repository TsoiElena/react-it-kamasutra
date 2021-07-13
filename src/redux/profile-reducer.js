const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const CHANGE_LIKES_COUNT = 'CHANGE-LIKES-COUNT'

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                text: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            return state

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state

        case CHANGE_LIKES_COUNT:
            state.posts.forEach((post) => {
                if (post.id === action.id){
                    state.posts[post.id-1].likesCount++
                }
            })
            return state
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