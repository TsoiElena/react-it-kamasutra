import React, {useEffect} from 'react'
import {getUsersThunkCrator, followThunkCreator, unfollowThunkCreator} from '../../redux/findUsers-reducer'
import connect from 'react-redux/lib/connect/connect'
import Users from './index'
import Preloader from "../common/Preloader/Preloader";

const UsersApi = ({
                      users,
                      following,
                      pageSize,
                      totalUsersCount,
                      currentPage,
                      isFetching,
                      getUsersThunkCrator,
                      followThunkCreator,
                      unfollowThunkCreator
                  }) => {

    const onPageChanged = (page) => {
        getUsersThunkCrator(page, pageSize)
    }

    const followUser = (id) => {
         followThunkCreator(id)
    }

    const unfollowUser = (id) => {
        unfollowThunkCreator(id)
    }

    useEffect(() => {
        getUsersThunkCrator(currentPage, pageSize)
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
    getUsersThunkCrator,
    followThunkCreator,
    unfollowThunkCreator
})(UsersApi)
