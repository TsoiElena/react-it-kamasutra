import {userAPI, usersAPI} from "../api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGAL_IS_FETCHING = 'TOGAL_IS_FETCHING'
const FOLLOWING = 'FOLLOWING'

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    following: []
}

const findUsersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: [
                    ...state.users.map(user => {
                        if (user.id === action.userId) {
                            return {...user, followed: true}
                        }
                        return user
                    })
                ]
            }

        case UNFOLLOW:
            return {
                ...state,
                users: [
                    ...state.users.map(user => {
                        if (user.id === action.userId) {
                            return {...user, followed: false}
                        }
                        return user
                    })
                ]
            }

        case SET_USERS:
            return {
                ...state,
                users: action.users
            }

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount}

        case TOGAL_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        case FOLLOWING:
            return {...state, following: action.following ? [...state.following, action.userId]
                    : [...state.following.filter(id => id !== action.userId)]}

        default:
            return state
    }
}

export const follow = (userId) => ({type: FOLLOW, userId: userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId: userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount})
export const togalIsFetching = (isFetching) => ({type: TOGAL_IS_FETCHING, isFetching})
export const followingAC = (following, userId) => ({type: FOLLOWING, following, userId})

export const getUsersThunkCrator = (page, pageSize) => (dispatch) => {
    dispatch(togalIsFetching(true))
    dispatch(setCurrentPage(page))
    usersAPI.getUsers(page, pageSize).then(data => {
        dispatch(setUsers(data.items))
        dispatch(togalIsFetching(false))
        dispatch(setTotalUsersCount(data.totalCount))
    })
}

export const followThunkCreator = (id) => (dispatch) => {
    dispatch(togalIsFetching(true))
    dispatch(followingAC(true, id))
    userAPI.follow(id).then(resultCode => {
        if (resultCode === 0) {
            dispatch(follow(id))
        }
        dispatch(togalIsFetching(false))
        dispatch(followingAC(false, id))
    })
}

export const unfollowThunkCreator = (id) => (dispatch) => {
    dispatch(togalIsFetching(true))
    dispatch(followingAC(true, id))
    userAPI.unfollow(id).then(resultCode => {
        if (resultCode === 0) {
            dispatch(unfollow(id))
        }
        dispatch(togalIsFetching(false))
        dispatch(followingAC(false, id))
    })
}

export default findUsersReducer