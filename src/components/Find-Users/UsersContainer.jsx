import React from 'react'
import {followActionCreator, setUsers, unfollowActionCreator} from '../../redux/findUsers-reducer'
import connect from 'react-redux/lib/connect/connect'
import Users from './index'

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsers(users))
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Users)


