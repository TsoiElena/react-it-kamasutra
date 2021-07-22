const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        // {
        //     id: 1,
        //     photoUrl: 'https://i.ytimg.com/vi/-rkWyaiS4_8/hqdefault.jpg',
        //     followed: false,
        //     fullname: 'Dima',
        //     status: 'hi i am new here',
        //     location: {city: 'Moscow', country: 'Russia'}
        // },
        // {
        //     id: 2,
        //     photoUrl: 'https://i.ytimg.com/vi/-rkWyaiS4_8/hqdefault.jpg',
        //     followed: true,
        //     fullname: 'Tima',
        //     status: 'hi i am new here',
        //     location: {city: 'Moscow', country: 'Russia'}
        // },
        // {
        //     id: 3,
        //     photoUrl: 'https://i.ytimg.com/vi/-rkWyaiS4_8/hqdefault.jpg',
        //     followed: true,
        //     fullname: 'Rima',
        //     status: 'hi i am new here',
        //     location: {city: 'Moscow', country: 'Russia'}
        // },
        // {
        //     id: 4,
        //     photoUrl: 'https://i.ytimg.com/vi/-rkWyaiS4_8/hqdefault.jpg',
        //     followed: false,
        //     fullname: 'Kira',
        //     status: 'hi i am new here',
        //     location: {city: 'Moscow', country: 'Russia'}
        // },
        // {
        //     id: 5,
        //     photoUrl: 'https://i.ytimg.com/vi/-rkWyaiS4_8/hqdefault.jpg',
        //     followed: false,
        //     fullname: 'Lena',
        //     status: 'hi i am new here',
        //     location: {city: 'Moscow', country: 'Russia'}
        // },
        // {
        //     id: 6,
        //     photoUrl: 'https://i.ytimg.com/vi/-rkWyaiS4_8/hqdefault.jpg',
        //     followed: true,
        //     fullname: 'Anna',
        //     status: 'hi i am new here',
        //     location: {city: 'Moscow', country: 'Russia'}
        // },
        // {
        //     id: 7,
        //     photoUrl: 'https://i.ytimg.com/vi/-rkWyaiS4_8/hqdefault.jpg',
        //     followed: false,
        //     fullname: 'Mahsa',
        //     status: 'hi i am new here',
        //     location: {city: 'Moscow', country: 'Russia'}
        // },
    ],
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
                users: [...state.users, ...action.users]
            }

        default:
            return state
    }
}

export const followActionCreator = (userId) => {
    return {type: FOLLOW, userId: userId}
}

export const unfollowActionCreator = (userId) => {
    return {type: UNFOLLOW, userId: userId}
}

export const setUsers = (users) => ({type: SET_USERS, users})

export default findUsersReducer