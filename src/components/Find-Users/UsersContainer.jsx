import React, {useEffect} from 'react'
import {
    followActionCreator,
    setCurrentPageActionCreator, setTotalUsersCount,
    setUsers,
    unfollowActionCreator
} from '../../redux/findUsers-reducer'
import connect from 'react-redux/lib/connect/connect'
import api from "../../api";
import Users from "./index";

const UsersApi = ({users, follow, unfollow, setUsers, pageSize, totalUsersCount, currentPage, setCurrentPage, setTotalUsersCount}) => {

    const onPageChanged = (page) => {
        setCurrentPage(page)
        api.get(`users?page=${page}&count=${pageSize}`).then(res => {
            setUsers(res.data.items)
        })
    }

    useEffect(() => {
        api.get(`users?page=${currentPage}&count=${pageSize}`).then(res => {
            setUsers(res.data.items)
            setTotalUsersCount(res.data.totalCount)
        })
    }, [])

    return (
        <Users
            users={users}
            follow={follow}
            unfollow={unfollow}
            onPageChanged={onPageChanged}
            currentPage={currentPage}
            totalUsersCount={totalUsersCount}
            pageSize={pageSize}
        />
    )
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
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

export default connect(mapStateToProps,mapDispatchToProps) (UsersApi)


