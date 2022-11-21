import {profileAPI, usersAPI} from "../api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const CHANGE_LIKES_COUNT = 'CHANGE-LIKES-COUNT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const UPDATE_STATUS = 'UPDATE_STATUS'
const TOGAL_IS_FETCHING = 'TOGAL_IS_FETCHING'
export const togalIsFetching = (isFetching) => ({type: TOGAL_IS_FETCHING, isFetching})


let initialState = {
    posts: [
    {id: 1, text: 'hi', likesCount: 11},
    {id: 2, text: 'first post', likesCount: 1},
],
    newPostText: 'hi',
    profile: null,
    status: '',
    isFetching: false,
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

        case SET_STATUS:
            return {...state, status: action.status}

        case UPDATE_STATUS:
            return {...state, status: action.status}

        case TOGAL_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        default:
            return state
    }

}

export const addPost = () => ({type: ADD_POST})
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, text})
export const likesCountChange = (id) => ({type: CHANGE_LIKES_COUNT, id})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const updateStatus = (status) => ({type: UPDATE_STATUS, status})

export const getUserThunkCreator = (id) => (dispatch) => {
    usersAPI.getUser(id).then(data => {
        dispatch(setUserProfile(data))
    })
}

export const getStatusThunkCreator = (id) => (dispatch) => {
    dispatch(togalIsFetching(true))
    profileAPI.getStatus(id).then(data => {
        dispatch(setStatus(data))
        dispatch(togalIsFetching(false))
    })

}

export const updateStatusThunkCreator = (status) => (dispatch) => {
    dispatch(togalIsFetching(true))

    profileAPI.updateStatus(status).then(resultCode => {
        if(resultCode === 0){
            dispatch(updateStatus(status))
            dispatch(togalIsFetching(false))
        }
    })
}

export default profileReducer
