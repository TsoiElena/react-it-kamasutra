const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const CHANGE_LIKES_COUNT = 'CHANGE-LIKES-COUNT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    posts: [
    {id: 1, text: 'hi', likesCount: 11},
    {id: 2, text: 'first post', likesCount: 1},
],
    newPostText: 'hi',
    profile: null
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {
                        id: state.posts.length + 1,
                        text: state.newPostText,
                        likesCount: 0
                    }
                ],
                newPostText: ''
            }

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            }

        case CHANGE_LIKES_COUNT:
            let stateCopy = {
                ...state,
                posts: [...state.posts]
            }
            stateCopy.posts.forEach((post) => {
                if (post.id === action.id){
                    stateCopy.posts[post.id-1].likesCount++
                }
            })
            return stateCopy

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        default:
            return state
    }

}

export const addPost = () => ({type: ADD_POST})
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, text})
export const likesCountChange = (id) => ({type: CHANGE_LIKES_COUNT, id})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export default profileReducer