import React, {useEffect} from 'react'
import {
    follow, followingAC,
    setCurrentPage, setTotalUsersCount,
    setUsers, togalIsFetching,
    unfollow
} from '../../redux/findUsers-reducer'
import connect from 'react-redux/lib/connect/connect'
import {userAPI, usersAPI} from '../../api'
import Users from './index'
import Preloader from "../common/Preloader/Preloader";

const UsersApi = ({
                      users,
                      following,
                      follow,
                      unfollow,
                      setUsers,
                      pageSize,
                      totalUsersCount,
                      currentPage,
                      setCurrentPage,
                      setTotalUsersCount,
                      isFetching,
                      togalIsFetching,
                      followingAC
                  }) => {

    const onPageChanged = (page) => {
        setCurrentPage(page)
        togalIsFetching(true)
        usersAPI.getUsers(page, pageSize).then(data => {
            setUsers(data.items)
            togalIsFetching(false)
        })
    }

    const followUser = (id) => {
        togalIsFetching(true)
        followingAC(true, id)
        userAPI.follow(id).then(resultCode => {
            if (resultCode === 0) {
                follow(id)
            }
            togalIsFetching(false)
            followingAC(false, id)
        })
    }

    const unfollowUser = (id) => {
        togalIsFetching(true)
        followingAC(true, id)
        userAPI.unfollow(id).then(resultCode => {
            if (resultCode === 0) {
                unfollow(id)
            }
            togalIsFetching(false)
            followingAC(false, id)
        })
    }

    useEffect(() => {
        togalIsFetching(true)
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            togalIsFetching(false)
            setUsers(data.items)
            setTotalUsersCount(data.totalCount)
        })
    }, [])

    return (
        <>
            {isFetching ? <Preloader/> : null}
            <Users
                users={users}
                follow={followUser}
                unfollow={unfollowUser}
                onPageChanged={onPageChanged}
                currentPage={currentPage}
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                isFetching={isFetching}
                following={following}
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
        isFetching: state.usersPage.isFetching,
        following: state.usersPage.following
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    togalIsFetching,
    followingAC
})(UsersApi)
