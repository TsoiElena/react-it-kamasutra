import React, {useEffect} from 'react'
import {
    follow,
    setCurrentPage, setTotalUsersCount,
    setUsers, togalIsFetching,
    unfollow
} from '../../redux/findUsers-reducer'
import connect from 'react-redux/lib/connect/connect'
import api from '../../api'
import Users from './index'
import Preloader from "../common/Preloader/Preloader";

const UsersApi = ({users, follow, unfollow, setUsers, pageSize, totalUsersCount, currentPage, setCurrentPage, setTotalUsersCount, isFetching, togalIsFetching}) => {

    const onPageChanged = (page) => {
        setCurrentPage(page)
        togalIsFetching(true)
        api.get(`users?page=${page}&count=${pageSize}`).then(res => {
            setUsers(res.data.items)
            togalIsFetching(false)
        })
    }

    useEffect(() => {
        togalIsFetching(true)
        api.get(`users?page=${currentPage}&count=${pageSize}`).then(res => {
            togalIsFetching(false)
            setUsers(res.data.items)
            setTotalUsersCount(res.data.totalCount)
        })
    }, [])

    return (
        <>
            { isFetching ? <Preloader/> : null}
            <Users
                users={users}
                follow={follow}
                unfollow={unfollow}
                onPageChanged={onPageChanged}
                currentPage={currentPage}
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                isFetching={isFetching}
            />
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    togalIsFetching
})(UsersApi)


