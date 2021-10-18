import {userAPI} from "../api";

const AUTH = 'AUTH'
const TOGAL_IS_FETCHING = 'TOGAL_IS_FETCHING'

let initialState = {
    userId: null,
    login: null,
    email: null,
    isFetching: false,
    isAuth: false
}

const loginReducer = (state = initialState, action) => {

    switch (action.type) {
        case AUTH:
            return {
                ...state,
                userId: action.userId,
                login: action.login,
                email: action.email,
                isAuth: true,
            }

        case TOGAL_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login ) => ({type: AUTH, data: {userId, email, login}})
export const togalIsFetching = (isFetching) => ({type: TOGAL_IS_FETCHING, isFetching})

export const authThunkCreator = () => (dispatch) => {
    dispatch(togalIsFetching(true))
    userAPI.auth().then(data => {
        if (data.resultCode === 0) {
            let {id, email, login} = data.data
            dispatch(setAuthUserData(id, email, login))
        }
        dispatch(togalIsFetching(false))
    })
}

export default loginReducer