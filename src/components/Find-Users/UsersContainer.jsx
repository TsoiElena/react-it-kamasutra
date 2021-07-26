import React from 'react'
import {
    followActionCreator,
    setCurrentPageActionCreator, setTotalUsersCount,
    setUsers,
    unfollowActionCreator
} from '../../redux/findUsers-reducer'
import connect from 'react-redux/lib/connect/connect'
import Users from './index'

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageActionCreator(currentPage))
        },
        setTotalUsersCount : (totalCount) => {
            dispatch(setTotalUsersCount(totalCount))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Users)


