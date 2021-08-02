const SET_USER_DATA = 'SET_USER_DATA'
const TOGAL_IS_FETCHING = 'TOGAL_IS_FETCHING'

let initialState = {
    userId: null,
    login: null,
    email: null,
    isFetching: false,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }

        case TOGAL_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login ) => ({type: SET_USER_DATA, data: {userId, email, login}})
export const togalIsFetching = (isFetching) => ({type: TOGAL_IS_FETCHING, isFetching})

export default authReducer